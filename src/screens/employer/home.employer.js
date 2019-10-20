import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Table, Button} from 'antd';
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


const HomeEmployer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const x = async () => {
            setData(
                await loadSecureUrl('/employer/jobs/')
            )
        };

        x();
    }, [setData]);

    return (<div className='container'>
            <Title>Recruitment</Title>
            <Link to='/recruitment/add/'>
                <Button type='primary' icon='plus'>
                    Add Recruitment
                </Button>
            </Link>
            <br/>
            <br/>

            <Table columns={columns} dataSource={data}/>
        </div>
    )
};

export default HomeEmployer;
