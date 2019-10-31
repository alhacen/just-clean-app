import React, {useState, useEffect} from 'react';
import {Button, Typography, notification, Row, Card, Skeleton} from 'antd';
import {Link} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import JobImage from 'components/jobImage';

const {Title} = Typography;

const Home = () => {

    const [jobs, setJobs] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const x = async () => {
            try {
                setJobs(
                    await loadSecureUrl('/seeker/jobs/available/count/')
                )
            } catch (e) {
                notification.error({
                    message: 'Error loading jobs'
                })
            }

            setLoading(false);
        };

        x();
    }, [setJobs]);

    return (
        <div className='full-page'>
            <div style={{maxWidth: '95vw', padding: '25px'}}>
                <Link to='/jobs/applied/'>
                    <Button size='large'>
                        Applied Jobs
                    </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/jobs/'>
                    <Button icon='search' size='large' type='primary'>
                        Find Jobs
                    </Button>
                </Link>
                <br/>
                <br/>
                <Title>
                    Jobs Available
                </Title>
                <br/>
                <Row>
                    {loading ? (
                        <Card>
                            <Skeleton/>
                        </Card>
                    ) : null}

                    {Object.keys(jobs).map(title => (
                        <JobImage link={'/jobs/search/' + btoa(title) + '/'} label={title} count={jobs[title]}/>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;
