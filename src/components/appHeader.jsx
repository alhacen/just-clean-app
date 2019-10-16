import React from "react";
import {Col, Row, Typography} from "antd";
import {selectScreen} from "../helpers/screen.helper";

const {Text} = Typography;

const AppHeader = () => (
    <header>
        <Row style={{flex: 1}}>
            <Col
                xs={24}
                md={6}
                xxl={4}
                className='logo-container'
                style={{justifyContent: selectScreen('center', 'center', null)}}>
                {/*<img src={JamiaLogo} alt='University Placement Cell, Logo' />*/}
                &nbsp;&nbsp;&nbsp;
                <div>
                    <Text strong style={{color: "#0689FF"}}>
                        JustCleanRojgar.in
                    </Text>
                    <div style={{fontSize: '0.75rem'}}>
                        Connecting 20 Crore Indian to Employment
                    </div>
                </div>
            </Col>

            <Col xs={0} md={18} xxl={20}>
            </Col>
        </Row>
    </header>
);

export default AppHeader;
