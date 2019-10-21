import React from 'react';
import {Card, Typography} from 'antd';


const {Title} = Typography;
const SignUpCard = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign Up
        </Title>
        to find a job
        <br/>
        <br/>
    </Card>
);

export default SignUpCard;
