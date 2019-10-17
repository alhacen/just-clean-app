import React from 'react';
import {Col, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';

import {selectScreen} from 'helpers/screen.helper';
import {HOME_PATH} from 'constants/routes/main.paths.constant';

const {Text} = Typography;

const AppHeader = () => (
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
            </Col>
        </Row>
    </header>
);

export default AppHeader;
