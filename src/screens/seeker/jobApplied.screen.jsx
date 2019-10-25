import React, {useState, useEffect} from 'react';
import {Button, Card, Descriptions, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

const {Title} = Typography;

const JobAppliedScreen = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const x = async () => {
            setJobs(
                await loadSecureUrl('/seeker/job/apply/')
            )
        };

        x();
    }, [setJobs]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <div>
                    <Link to='/jobs/'>
                        <Button icon='search' size='large' type='primary'>
                            Find Jobs
                        </Button>
                    </Link>
                    <br/>
                    <br/>
                    <Title level={3}>Jobs Applied</Title>
                    {jobs.length === 0 ? (
                        <Card>
                            <Empty description=''>
                                <Link to='/jobs/'>
                                    <Button>Find Jobs</Button>
                                </Link>
                            </Empty>
                        </Card>
                    ) : null}

                    {jobs.map((job, index) => {
                        const status = (() => {
                            switch (job.status) {
                                case 'A':
                                    return 'Applied';
                                case 'S':
                                    return 'Seen';
                                case 'R':
                                    return 'Rejected';
                                case 'D':
                                    return 'Selected';
                                case 'J':
                                    return 'Joined';
                                default:
                                    return 'Unknown';
                            }
                        })();

                        if (status === 'Joined')
                            return null;

                        return (
                            <Card key={index.toString()} bordered={false}
                                  style={{backgroundColor: status === 'Selected' ? '#00E57F' : null}}>
                                <Descriptions title={`${job.job.organisation} - ${job.job.title}`}>

                                    <Descriptions.Item label='Applied on'>
                                        {new Date(job.applied_on).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Location'>
                                        {job.job.location}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Salary range'>
                                        {job.job.salary_range}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Last updated'>
                                        {new Date(job.status_changed).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Status'>
                                        {status}
                                    </Descriptions.Item>
                                </Descriptions>
                                <br/>
                                <b>
                                     Reporting Location
                                </b>
                                <br/>
                                {job.job.reporting_location}
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default JobAppliedScreen;
