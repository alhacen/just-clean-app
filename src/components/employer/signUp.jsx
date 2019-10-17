import React from 'react';
import {Card, Typography} from 'antd';
import SignUpEmployerForm from 'forms/employer/signUp.employer.form/signUp.employer.form';


const {Title} = Typography;
const SignUpCard = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign Up
        </Title>
        to find a job
        <br/>
        <br/>
        <SignUpEmployerForm/>
    </Card>
);

export default SignUpCard;
