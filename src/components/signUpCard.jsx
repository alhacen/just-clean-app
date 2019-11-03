import React, {useState} from 'react';
import {Card, Typography, Spin, Button, notification} from 'antd';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';
import OtpSignUpForm from 'forms/signUp/otp.signUp.form';
import PasswordSignUpForm from 'forms/signUp/passoword.SignUp.form/password.signUp.form';
import {seekerSignUp} from 'helpers/api/seeker.api.helper';
import {employerSignUp} from 'helpers/api/employer.api.helper';
import {loadOpenUrl} from 'helpers/api/main.api.helper';


const {Title, Text} = Typography;

const SignUpSelection = ({type, setData, next, data}) => {

    let Component = null;

    switch (type) {
        case 'SEEKER':
            Component = OtpSignUpForm;
            break;
        case 'EMPLOYER':
            Component = PasswordSignUpForm;
            break;
        case 'PARTNER':
            Component = PasswordSignUpForm;
            break;
        default:
            return ''
    }

    return (
        <Component setData={setData} next={next} data={data}/>
    );
};


const SignUpCard = ({subTitle, component: Component, type, history, initialValues}) => {

    /*
    0: Basic details
    1: Password OTP
    2: Creating Account
    3: Error in creating account try again
     */
    const [state, setState] = useState(0);
    const [data, setData] = useState({});

    console.log(data);

    const saveUser = async () => {
        try {
            if (type === 'SEEKER')
                await seekerSignUp(data);
            if (type === 'EMPLOYER')
                await employerSignUp(data);
            if (type === 'PARTNER')
                await loadOpenUrl('/partner/sign-up/', {
                    method: 'POST',
                    data: data
                });

            console.log('SEEKER DATA', data);
            console.log(data.seeker.dob);
            console.log(data.seeker.dob.format('DDMM'));

            notification.success({
                message: 'Created your account',
                description:
                    'Your account has been created, Sign In to your account'
            });

            if (type === 'SEEKER'){
                const password = data.seeker.dob.format('DDMM');

                notification.success({
                    message: `Your password is ${password}`,
                    description: `आपका पासवर्ड ${password} है`,
                    duration: 0
                })
            }

            history.push('/welcome/');
        } catch (e) {
            setState(3);
            console.log('AAA', e.data);
            notification.error({
                message: 'An error occurred during signup.',
                description: e.data.detail
            })
        }
    };

    let component = null;

    switch (state) {
        case 0:
            component = <Component initialValues={initialValues} next={() => setState(state + 1)} setData={setData}
                                   data={data}/>;
            break;
        case 1:
            component = <SignUpSelection type={type} setData={setData} next={() => setState(state + 1)} data={data}/>;
            break;
        case 2:
            component = (
                <div style={{height: 300}} className='center-hv'>
                    <Spin tip='Creating your account'/>
                </div>
            );
            break;
        default:
            component = (
                <div style={{height: 300}} className='center-hv'>
                    <div>
                        Error in creating your account
                        <br/>
                        <Button type='danger' onClick={() => setState(0)}>
                            Try again
                        </Button>
                    </div>
                </div>
            )
    }

    if (state === 2)
        saveUser();

    return (
        <Card style={{textAlign: 'center'}}>
            <Title level={2} style={{marginBottom: 0}}>
                Sign Up
            </Title>
            {subTitle}
            <br/>
            <Text type='secondary'>
                or &nbsp;
                <Link to='/sign-in/'>
                    Sign In
                </Link>
                &nbsp;
                if already have a account
            </Text>

            <br/>
            <br/>
            {component}
        </Card>
    );
};

export default withRouter(SignUpCard);
