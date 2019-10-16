import React, {useState, useEffect} from 'react';
import {Row, Col} from 'antd';

import JobSeeker from "../assets/images/job-seeker.png";
import SignIn from "../components/signIn";


function HomeScreen() {
    const setWidth = useState(window.innerWidth)[1];

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
        <div>
            <Row>
                <Col xs={24}>
                    <div style={{position: 'relative'}}>
                        <img src={JobSeeker} alt="Job seeker" className="job-seeker-image"/>
                        <Row style={{position: 'absolute', top: 0, right: 0, width: '100%', opacity: 0.975}}>
                            <Col xs={24} md={8} style={{padding: 20, float: 'right'}}>
                                <SignIn/>
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

export default HomeScreen;
