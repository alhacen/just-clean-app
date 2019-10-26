import React from 'react';
import {Form, Icon, Input, Button, notification} from 'antd';
import {withRouter} from 'react-router-dom';
import {sendOTP} from 'helpers/api/seeker.api.helper';
import {loadOpenUrl} from 'helpers/api/main.api.helper';

// eslint-disable-next-line no-control-regex
const usernamePattern = /((\d{10})|((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])))/;

class ForgotPasswordScreen extends React.Component {
    state = {
        otpSendButtonEnabled: true,
        otpSentTo: '',
        sendingOTP: false
    };

    changePassword = async () => {
        const {username, otp, password} = this.props.form.getFieldsValue();
        try {
            await loadOpenUrl('/auth/forgot-password/', {
                method: 'POST',
                data: {
                    username,
                    otp,
                    password
                }
            });

            notification.success({
                message: 'Password changed successful'
            });
            this.props.history.push('/sign-in/');
        } catch (e) {
            notification.error({
                message: 'Error in changing password',
                description: e.data.detail
            })
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.changePassword();
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue, getFieldError, isFieldTouched} = this.props.form;
        console.log(getFieldError('username'));
        const usernameIsValid = !getFieldError('username') && isFieldTouched('username');

        return (
            <Form onSubmit={this.handleSubmit} className="login-form" id='sign-in-form'>
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
                                    width: '70%',
                                    borderTopRightRadius: '0 !important',
                                    borderBottomRightRadius: '0 !important'
                                }}
                            />,
                        )}
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
                    </Input.Group>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('otp', {
                        rules: [{
                            required: true,
                            message: `Please input your 4 digit OTP!`,
                            min: 4,
                        }],
                    })(
                        <Input
                            prefix={<Icon type="security-scan" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder={'OTP'}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            min: 6
                        }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder={'New Password'}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Reset My Password
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default withRouter(Form.create()(ForgotPasswordScreen));
