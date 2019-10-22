import React from 'react';
import {Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectScreen} from 'helpers/screen.helper';
import {HOME_PATH} from 'constants/routes/main.paths.constant';
import {USER_SIGNED_OUT} from 'actions';

import Logo from 'assets/images/Logo.png';
import HeaderPills from 'components/headerPills';
import HeaderPillsMobile from 'components/headerPillsMobile';


const AppHeader = ({isAuthenticated, signOut, user}) => (
    <header>
        <Row style={{flex: 1}}>
            <Link to={HOME_PATH}>
                <Col
                    xs={24}
                    md={6}
                    xxl={4}
                    className='logo-container'
                    style={{justifyContent: selectScreen('center', 'center', null)}}
                >
                    <div className='center-hv'>
                        <img src={Logo} alt='Just Clean Rojgar'/>
                    </div>
                </Col>
            </Link>
            <HeaderPillsMobile user={user} isAuthenticated={isAuthenticated} signOut={signOut}/>
            <Col xs={0} md={18} xxl={20}>
                <div className='center-hv' style={{float: 'right'}}>
                    <HeaderPills mode={selectScreen('vertical', 'horizontal')} user={user}
                                 isAuthenticated={isAuthenticated} signOut={signOut}/>
                </div>
            </Col>
        </Row>
    </header>
);


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch({type: USER_SIGNED_OUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
