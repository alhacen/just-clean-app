import React from 'react';
import {Card, Typography} from 'antd';
import SignUpSeekerForm from 'forms/seeker/signUp.seeker.form';


const {Title} = Typography;
const SignUpCard = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign Up
        </Title>
        to find a job
        <br/>
        <br/>
        <SignUpSeekerForm/>
    </Card>
);

export default SignUpCard;
