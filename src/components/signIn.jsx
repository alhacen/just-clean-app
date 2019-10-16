import React from "react";
import {Button, Card, Typography} from "antd";
import SignInForm from "../forms/signIn.form";

const {Title} = Typography;

const SignIn = () => (
    <Card style={{textAlign: 'center'}}>
        <Title level={2} style={{marginBottom: 0}}>
            Sign In
        </Title>
        to continue
        <br/>
        <br/>
        <SignInForm/>

        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Button size='large' icon='file-search'>
                Finding a job?
            </Button>
            <Button size='large' icon='usergroup-add'>
                Want to hire?
            </Button>
        </div>
    </Card>
);

export default SignIn;
