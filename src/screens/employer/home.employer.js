import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import {Typography,Table, Button} from 'antd';

const {Title} = Typography;
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Next Round',
        dataIndex: 'next_round',
        key: 'nextRound',
    },
    {
        title: 'Ongoing Round ',
        dataIndex: 'round',
        key: 'round',
    },
    {
        title: 'Selected students',
        dataIndex: 'selected',
        key: 'selected',
    },
];


const HomeEmployer = () => {
     return(  <div className='container'>
            <Title>Recruitment</Title>
            <Link to='/recruitment/add/'>
                <Button type='primary' icon='plus'>
                    Add Recruitment
                </Button>
            </Link>
            <br />
            <br />
            <Table columns={columns} dataSource={[]} />
        </div>
    )};

export default HomeEmployer;
