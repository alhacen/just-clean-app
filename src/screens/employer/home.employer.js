import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Button, notification, Row, Skeleton, Card} from 'antd';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import JobImage from 'components/jobImage';

const {Title} = Typography;


const HomeEmployer = () => {
    const [seekers, setSeekers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const x = async () => {
            try {
                setSeekers(
                    await loadSecureUrl('/employer/jobs/seekers/')
                );
            } catch (e) {
                notification.error({
                    message: 'Error in loading seekers'
                })
            }

            setLoading(false);
        };

        x();
    }, [setSeekers]);

    return (
        <div className='container'>
            <Title>Employer Dashboard</Title>
            <Link to='/job/add/'>
                <Button type='primary' icon='plus'>
                    Add Job
                </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/job/'>
                <Button>
                    Your Jobs
                </Button>
            </Link>

            <br/>
            <br/>
            <Title level={3}>
                Seekers available for hiring
            </Title>

            {loading ? (
                <Card>
                    <Skeleton/>
                </Card>
            ) : null}

            <Row style={{textAlign: 'center'}}>
                {Object.keys(seekers).map(title => (
                    <JobImage link={'/job/add/' + btoa(title) + '/'} label={title} count={seekers[title]}/>
                ))}
            </Row>
        </div>
    )
};

export default HomeEmployer;
