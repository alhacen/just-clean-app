import React, {useEffect, useState} from 'react';
import {Button, Card, Descriptions, Typography, Empty, notification, Select} from 'antd';
import {withRouter} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import {jobTitleChoices} from 'constants/choices';
import {selectScreen} from 'helpers/screen.helper';

const {Title} = Typography;

const JobAvailable = ({history, match}) => {

    let title = '';
    if(match.params.hash)
        title = atob(match.params.hash);

    const [jobs, setJobs] = useState([]);
    const [applying, setApplying] = useState(false);
    const [value, setValue] = useState(title);

    useEffect(() => {
        const x = async () => {
            setJobs(
                await loadSecureUrl('/seeker/job/available/', {
                    params: {
                        title: value
                    }
                })
            )
        };

        x();
    }, [setJobs, value]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <div>
                    <Title level={3}>Job Available</Title>
                    <div>
                        <Select
                            style={{width: selectScreen('100%', 300)}}
                            value={value}
                            onChange={(value) => setValue(value)}
                        >
                            <Select.Option value=''>
                                According to my preference
                            </Select.Option>
                            {Object.keys(jobTitleChoices).map(key => (
                                <Select.Option value={key}>
                                    {key}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <br/>
                    {jobs.length === 0 ? (
                        <Card>
                            <Empty description='No Job Available for now'/>
                        </Card>
                    ) : null}
                    {jobs.map(job => {
                        return (
                            <Card bordered={false}>
                                <Descriptions title={`${job.title} - ${job.organisation}`}>

                                    <Descriptions.Item label='Posted on'>
                                        {new Date(job.posted).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Last Date of Application'>
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
                                        setApplying(true);
                                        await loadSecureUrl(`/seeker/job/apply/${job.id}/`, {
                                            method: 'POST'
                                        });
                                        history.push('/');
                                    } catch (e) {
                                        notification.error({
                                            message: 'Unknown error occurred'
                                        });
                                        setApplying(false);
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

export default withRouter(JobAvailable);
