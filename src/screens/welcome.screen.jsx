import React from 'react';
import {Result, Button, Icon} from 'antd';
import {Link} from 'react-router-dom';


const WelcomeScreen = () => (
    <div className='full-page center-hv'>
        <Result
            icon={<Icon type="smile" theme="twoTone"/>}
            title="Welcome to Just Clean Rojgar"
            extra={<div>
                Your account has ben created
                <br />
                <Link to='/sign-in/'>
                    <Button type="primary">Sign In To Continue</Button>
                </Link>
            </div>}
        />
    </div>
);

export default WelcomeScreen;
