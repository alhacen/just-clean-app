import React from 'react';
import {Card, Typography} from 'antd';
import SignUpForm from 'forms/employer/signUp.employer.form/signUp.form';


const {Title} = Typography;
const SignUpCard = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign Up
        </Title>
        to find a job
        <br/>
        <br/>
        <SignUpForm/>
    </Card>
);

export default SignUpCard;
