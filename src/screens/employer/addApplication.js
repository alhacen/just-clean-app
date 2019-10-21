import React from 'react';
import {Card, Typography} from 'antd';
import AddApplicationForm from 'forms/addApplication.form/addApplication.form';


const {Title} = Typography;

const AddApplication = () => (
    <div className='full-page center-hv'>
        <Card style={{maxWidth: '95vw', width: 500}}>
            <Title>
                Add Job
            </Title>
            <AddApplicationForm />
        </Card>
    </div>
);


export default AddApplication;
