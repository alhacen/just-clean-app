import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Table, Button, notification} from 'antd';
import {loadSecureUrl} from 'helpers/api/main.api.helper';

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


const JobAdded = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
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

        y();
    }, [setData]);

    return (
        <div className='container'>
            <Title>Jobs you provide</Title>
            <Link to='/job/add/'>
                <Button type='primary' icon='plus'>
                    Add Job
                </Button>
            </Link>
            <br/>
            <br/>
            <Table columns={columns} dataSource={data}/>
        </div>
    )
};

export default JobAdded;
