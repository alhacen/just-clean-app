import React, {useState, useEffect} from 'react';
import {Row, Col, Typography, Card, Button, Icon} from 'antd';

import JobSeeker from "./assets/images/job-seeker.png";
import JobFinding from "./assets/images/job.png";
import {selectScreen} from "./helpers/screen.helper";

import 'antd/dist/antd.css';
import './styles/style.css';
import SignInForm from "./components/signInForm";


const {Title, Text} = Typography;

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const changeState = () => {
            setWidth(window.innerWidth)
        };

        window.addEventListener('resize', changeState);

        return () => {
            window.removeEventListener('resize', changeState);
        }
    }, [setWidth]);

    return (
        <div className="App">
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
            <Row>
                <Col xs={24}>
                    <div style={{position: 'relative'}}>
                        <img src={JobSeeker} alt="Job seeker" className="job-seeker-image"/>
                        <Row style={{position: 'absolute', top: 0, right: 0, width: '100%', opacity: 0.975}}>
                            <Col xs={24} md={8} style={{padding: 20, float: 'right'}}>
                                <Card style={{textAlign: 'center'}}>
                                    <Title level={2} style={{marginBottom: 0}}>
                                        Sign In
                                    </Title>
                                    to continue
                                    <br/>
                                    <br/>
                                    <SignInForm/>

                                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                        <Button size='large' icon='file-search'>
                                            Finding a job?
                                        </Button>
                                        <Button size='large' icon='usergroup-add'>
                                            Want to hire?
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row style={{padding: 40}}>
                <Col xs={24}>

                </Col>
            </Row>
        </div>
    );
}

export default App;
