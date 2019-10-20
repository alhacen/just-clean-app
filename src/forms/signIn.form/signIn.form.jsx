import React from 'react';
import {Form, Icon, Input, Button, notification, Radio} from 'antd';
import {sendOTP} from 'helpers/api/seeker.api.helper';


class SignInForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.props.signIn(values.username, values.password, values.type);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" id='sign-in-form'>
                <Form.Item>
                    {getFieldDecorator('type', {
                        initialValue: 'O',
                    })(
                        <div>
                            Sign In With:
                            &nbsp;&nbsp;&nbsp;
                            <Radio.Group defaultValue='O'>
                                <Radio value='O'>Otp</Radio>
                                <Radio value='P'>Password</Radio>
                            </Radio.Group>
                        </div>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Phone / Email"
                            onBlur={async () => {
                                try {
                                    const username = getFieldValue('username');
                                    const type = getFieldValue('type');
                                    console.log({
                                        type,
                                        username
                                    });
                                    if (username && username.length > 0 && type === 'O') {
                                        const data = await sendOTP(this.props.form.getFieldValue('username'));
                                        notification.success({
                                            message: data.detail
                                        })
                                    }
                                } catch (e) {
                                    console.log(e);
                                    notification.error({
                                        message: e.data.detail
                                    })
                                }
                            }}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="OTP / Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="#!">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign In
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({name: 'normal_login'})(SignInForm);
