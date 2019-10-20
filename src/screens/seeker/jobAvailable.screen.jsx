import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Descriptions, Icon, Row, Skeleton, Typography, Empty, notification} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

const {Title} = Typography;

const JobAvaiable = ({history}) => {

    const [jobs, setJobs] = useState([]);
    const [applying, setApplyng] = useState(false);

    useEffect(() => {
        const x = async () => {
            setJobs(
                await loadSecureUrl('/seeker/job/available/')
            )
        };

        x();
    }, [setJobs]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <div>
                    <Title level={3}>Job Available</Title>
                    {jobs.length === 0 ? (
                        <Card>
                            <Empty description='No Job Available for now' />
                        </Card>
                    ) : null}
                    {jobs.map(job => {
                        return (
                            <Card bordered={false}>
                                <Descriptions title={`${job.title} - ${job.organisation}`}>

                                    <Descriptions.Item label='Posted on'>
                                        {new Date(job.posted).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Last Date'>
                                        {new Date(job.apply_till).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Salary range'>
                                        {job.salary_range}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Educational Qualification'>
                                        {job.educational_qualification}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Job Location'>
                                        {job.location}
                                    </Descriptions.Item>
                                </Descriptions>
                                <Button type='primary' loading={applying} onClick={async () => {
                                    try {
                                        setApplyng(true);
                                        await loadSecureUrl(`/seeker/job/apply/${job.id}/`, {
                                            method: 'POST'
                                        });
                                        history.push('/');
                                    } catch (e) {
                                        notification.error({
                                            message: 'Unknown error occurred'
                                        });
                                        setApplyng(false);
                                    }
                                }}>
                                    Apply for this job
                                </Button>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default withRouter(JobAvaiable);
