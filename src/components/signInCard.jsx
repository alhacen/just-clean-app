import React from 'react';
import {Button, Card, Typography, Spin} from 'antd';
import {Redirect} from 'react-router-dom';
import {signIn} from 'actions/auth.action';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SignInForm from 'forms/signIn.form';
import {SEEKER_SIGNUP_PATH, EMPLOYER_SIGNUP_PATH} from 'constants/routes/main.paths.constant';

const {Title} = Typography;
const SignInCard = ({signIn: signInAction, isAuthenticated, user, isConnected}) => {
    if (isAuthenticated) {
        switch (user.type) {
            case 'S':
                return <Redirect to='/seeker/'/>;
            case 'E':
                return <Redirect to='/employer/'/>;
            case 'P':
                return <Redirect to='/partner/'/>;
            default:
                return <Redirect to='/'/>;
        }
    }

    return (
        <Spin spinning={!isConnected}>
            <Card>
                <Title level={2} style={{marginBottom: 0}}>
                    Sign In
                </Title>
                to continue
                <br/>
                <br/>
                <SignInForm signIn={signInAction}/>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                    <Link to={SEEKER_SIGNUP_PATH}>
                        <Button size='large' icon='file-search' type='primary'>
                            Finding a job?
                        </Button>
                    </Link>
                    <Link to={EMPLOYER_SIGNUP_PATH}>
                        <Button size='large' icon='usergroup-add'>
                            Want to hire?
                        </Button>
                    </Link>
                </div>
            </Card>
        </Spin>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isConnected: state.auth.isConnected,
    user: state.auth.user
});
const mapDispatchToProps = (dispatch) => ({
    signIn: (username, password, type) => dispatch(signIn(username, password, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);
