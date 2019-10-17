import React, {useState} from 'react';
import {Card, Typography, Radio} from 'antd';
import OtpSignUpForm from 'forms/signUp/otp.signUp.form';
import PasswordSignUpForm from 'forms/signUp/passoword.SignUp.form/password.signUp.form';
import Fade from 'react-reveal/Fade';


const {Title} = Typography;

const SignUpSelection = ({type}) => {

    let Component = null;

    switch (type) {
        case 'OTP':
            Component = OtpSignUpForm;
            break;
        case 'PASSWORD':
            Component = PasswordSignUpForm;
            break;
        default:
            return ''
    }

    return (
        <Fade left>
            <Component/>
        </Fade>
    );
};


const SignUpCard = ({subTitle, component, type}) => {

    const [state, setState] = useState(0);

    const Component = state === 0 ? component : SignUpSelection;

    return (
        <Card style={{textAlign: 'center'}}>
            <Title level={2} style={{marginBottom: 0}}>
                Sign Up
            </Title>
            {subTitle}

            <br/>
            <br/>
            <Component next={() => setState(state + 1)} type={type} />
        </Card>
    );
};

export default SignUpCard;
