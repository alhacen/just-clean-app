import React from 'react';
import {Button, Card, Typography} from 'antd';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import SignInForm from 'forms/signIn.form';
import {SEEKER_SIGNUP_PATH} from 'constants/routes/main.paths.constant';

const {Title} = Typography;
const SignInCard = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign In
        </Title>
        to continue
        <br/>
        <br/>
        <SignInForm/>

        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
            <Link to={SEEKER_SIGNUP_PATH}>
                <Button size='large' icon='file-search' type='primary'>
                    Finding a job?
                </Button>
            </Link>
            <Button size='large' icon='usergroup-add'>
                Want to hire?
            </Button>
        </div>
    </Card>
);

export default SignInCard;
