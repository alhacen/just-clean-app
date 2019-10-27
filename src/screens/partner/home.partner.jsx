import React, {useState, useEffect} from 'react';
import {Button, notification, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import JobImage from 'components/jobImage';


const {Title} = Typography;

const AddSeekerButton = () => {

    const [code, setCode] = useState(null);

    useEffect(() => {
        const x = async () => {
            const data = await loadSecureUrl('/partner/code/');
            console.log(data, 'DDDDDD');
            setCode(
                data.code
            )
        };

        x();
    }, [setCode]);

    if (code === null)
        return (
            <Button type='primary' icon='plus' loading={true}>
                Add Seeker
            </Button>
        );

    return (
        <a href={`/partner/seeker/sign-up/${code}/`}>
            <Button type='primary' icon='plus'>
                Add Seeker
            </Button>
        </a>
    )
};

const Home = () => {

    const [jobs, setJobs] = useState({});

    useEffect(() => {
        const x = async () => {
            try {
                setJobs(
                    await loadSecureUrl('/partner/jobs/')
                )
            } catch (e) {
                notification.error({
                    message: 'Error loading jobs'
                })
            }
        };

        x();
    }, [setJobs]);


    return (
        <div className='container'>
            <Title>
                Partner Dashboard
            </Title>

            <AddSeekerButton/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/seeker/'>
                <Button>
                    Your Seekers
                </Button>
            </Link>

            <br/>
            <br/>

            <Title level={4}>
                Seekers Needed
            </Title>
            <Row>
                {Object.keys(jobs).map(title => (
                    <JobImage label={title} count={jobs[title]}/>
                ))}
            </Row>

        </div>
    );
};

export default Home;
