import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Table, Button, notification, Row} from 'antd';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import JobImage from 'components/jobImage';

const {Title} = Typography;
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, col) => <Link to={`/applications/${col.id}/`}>{text}</Link>,
    }, {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    }, {
        title: 'Last Date of application',
        dataIndex: 'apply_till',
        key: 'apply_till',
    }, {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => {
            switch (status) {
                case 'V':
                    return 'Verified';
                case 'P':
                    return 'Pending';
                case 'B':
                    return 'Not Verified';
                default:
                    return 'Unknown';
            }
        }
    }
];


const HomeEmployer = () => {
    const [data, setData] = useState([]);
    const [seekers, setSeekers] = useState({});

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
        };

        const y = async () => {
            try {
                setData(
                    await loadSecureUrl('/employer/jobs/')
                )
            } catch (e) {
                notification.error({
                    message: 'Error in loading added jobs'
                })
            }
        };

        x();
        y();
    }, [setData, setSeekers]);

    return (
        <div className='container'>
            <Title>Employer Dashboard</Title>
            <Link to='/job/add/'>
                <Button type='primary' icon='plus'>
                    Add Job
                </Button>
            </Link>

            <br/>
            <br/>
            <Title level={3}>
                Seekers available for hiring
            </Title>
            <Row>
                {Object.keys(seekers).map(title => (
                    <Link to={'/job/add/' + btoa(title) + '/'}>
                        <JobImage label={title} count={seekers[title]}/>
                    </Link>
                ))}
            </Row>
            <br/>
            <br/>
            <Title level={3}>
                Your recruitment
            </Title>
            <Table columns={columns} dataSource={data}/>
        </div>
    )
};

export default HomeEmployer;
