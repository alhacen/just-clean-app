import React from 'react';
import {Col, Row, Typography, Button} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectScreen} from 'helpers/screen.helper';
import {HOME_PATH} from 'constants/routes/main.paths.constant';
import {USER_SIGNED_OUT} from 'actions';

const {Text} = Typography;

const AppHeader = ({isAuthenticated, signOut}) => (
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
                    &nbsp;&nbsp;&nbsp;
                    <div>
                        <Text strong>
                            JustCleanRojgar.in
                        </Text>
                        <div>
                            <Text style={{fontSize: '0.75rem'}}>
                                Connecting 20 Crore Indian to Employment
                            </Text>
                        </div>
                    </div>
                </Col>
            </Link>
            <Col xs={0} md={18} xxl={20}>
                {isAuthenticated ? (
                    <Button type='link' size='large' style={{float: 'right'}} onClick={signOut}>
                        Sign Out
                    </Button>
                ) : null}
            </Col>
        </Row>
    </header>
);


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch({type: USER_SIGNED_OUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
