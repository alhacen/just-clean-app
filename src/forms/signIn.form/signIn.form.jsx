import React from 'react';
import {Form, Icon, Input, Button, notification, Radio} from 'antd';
import {Link} from 'react-router-dom';
import {sendOTP} from 'helpers/api/seeker.api.helper';

// eslint-disable-next-line no-control-regex
const usernamePattern = /((\d{10})|((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])))/;

class SignInForm extends React.Component {
    state = {
        loginType: 'P',
        otpSendButtonEnabled: true,
        otpSentTo: '',
        sendingOTP: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log(values, 'VALUE SIGNIN');
                this.props.signIn(values.username, values.password || values.otp, this.state.loginType);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue, getFieldError, isFieldTouched} = this.props.form;
        const isOTPLogin = this.state.loginType === 'O';
        console.log(getFieldError('username'));
        const usernameIsValid = !getFieldError('username') && isFieldTouched('username');

        return (
            <Form onSubmit={this.handleSubmit} className="login-form" id='sign-in-form'>
                {/*<Form.Item>*/}
                {/*    <div>*/}
                {/*        Sign In With:*/}
                {/*        &nbsp;&nbsp;&nbsp;*/}
                {/*        <Radio.Group*/}
                {/*            defaultValue='O'*/}
                {/*            onChange={(e) => {*/}
                {/*                console.log(e);*/}
                {/*                this.setState({loginType: e.target.value});*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <Radio value='O'>Otp</Radio>*/}
                {/*            <Radio value='P'>Password</Radio>*/}
                {/*        </Radio.Group>*/}
                {/*    </div>*/}
                {/*</Form.Item>*/}
                <Form.Item>
                    <Input.Group>
                        {getFieldDecorator('username', {
                            rules: [
                                {required: true, message: 'Please input your username!'},
                                {pattern: usernamePattern, message: 'Not valid phone/email'}
                            ]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Phone / Email"
                                style={{
                                    width: isOTPLogin ? '70%' : '100%',
                                    borderTopRightRadius: '0 !important',
                                    borderBottomRightRadius: '0 !important'
                                }}
                            />,
                        )}
                        {isOTPLogin ? (
                            <Button
                                type='primary'
                                loading={this.state.sendingOTP}
                                disabled={!(this.state.otpSendButtonEnabled && usernameIsValid && getFieldValue('username') !== this.state.otpSentTo)}
                                style={{width: '30%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                                onClick={async () => {
                                    try {
                                        const username = getFieldValue('username');
                                        this.setState({otpSentTo: username, sendingOTP: true});
                                        if (username && username.length > 0) {
                                            const data = await sendOTP(this.props.form.getFieldValue('username'));
                                            notification.success({
                                                message: data.detail
                                            })
                                        }
                                        this.setState({
                                            otpSendButtonEnabled: false,
                                            sendingOTP: false
                                        });
                                        setTimeout(() => {
                                            this.setState({
                                                otpSendButtonEnabled: true,
                                                otpSentTo: ''
                                            });
                                        }, 1 * 1000 * 60);
                                    } catch (e) {
                                        console.log(e);
                                        this.setState({
                                            otpSendButtonEnabled: true,
                                            sendingOTP: false,
                                        });
                                        notification.error({
                                            message: e.data.detail
                                        })
                                    }
                                }}
                            >
                                Send OTP
                            </Button>
                        ) : null}
                    </Input.Group>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator(isOTPLogin ? 'otp' : 'password', {
                        rules: [{
                            required: true,
                            min: 4,
                            message: `Please input your ${isOTPLogin ? '4 digit OTP' : 'password'}!`
                        }],
                    })(
                        <Input
                            prefix={<Icon type={isOTPLogin? "security-scan" : "lock"} style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder={isOTPLogin ? 'OTP' : 'Password'}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Link className="login-form-forgot" to="/forgot-password/">
                        Forgot password
                    </Link>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign In
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({name: 'normal_login'})(SignInForm);
