import React from 'react';
import ForgotPassword from 'components/forgotPassword';
import {Card, Typography} from 'antd';

const {Title} = Typography;
const ForgotPasswordScreen = () => (
    <div className='full-page center-hv'>
        <div style={{width: '500px', maxWidth: '95vw'}}>
            <Card>
            <Title level={2} style={{marginBottom: 0}}>
                Reset your password
            </Title>
                <br/>
                <br/>
                <ForgotPassword />
            </Card>
        </div>
    </div>
);

export default ForgotPasswordScreen;
