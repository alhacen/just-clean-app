import React, {useState, useEffect} from 'react';
import {Button, Card, Descriptions, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

const {Title} = Typography;

const Home = () => {

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
                    <br />
                    <br />
                    <Title level={3}>Job Applied</Title>
                    {jobs.length === 0 ? (
                        <Card>
                            <Empty description='No Job Available'>
                                <Link to='job-available/'>
                                    <Button>Find Jobs</Button>
                                </Link>
                            </Empty>
                        </Card>
                    ) : null}

                    {jobs.map(job => {
                        return (
                            <Card bordered={false}>
                                <Descriptions title={`${job.job.organisation} - ${job.job.title}`}>
                                    <Descriptions.Item label='Minimum Experience'>
                                        {job.min_experience}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Applied on'>
                                        {new Date(job.applied_on).toLocaleString()}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Location'>
                                        {job.job.location}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Salary range'>
                                        {job.job.salary_range}
                                    </Descriptions.Item>

                                    <Descriptions.Item label='Status'>
                                        {(() => {
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
                                        })()}
                                    </Descriptions.Item>
                                </Descriptions>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
