import React, {useState, useEffect} from 'react';
import {Row,Typography, Col} from 'antd';

import JobSeeker from "../../assets/images/job-seeker.png";
import SignIn from "../../components/signIn";
import SignUp from "../../forms/signUp.form";
import AboutUs from "../../components/home/aboutUs"
import OurPartners from "../../components/home/ourPartners"
import {BADGES} from '../../components/home/badges.home.constant';
const {Title} = Typography;
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

            <Row>
                <Col xs={24}>

                </Col>
            </Row>
            <div className='badge-container' >
              {BADGES.map(({badge, info}, index) => (
                <div key={index.toString()}>
                  <img src={badge} alt={info} title={info} className='responsive-img' />
                </div>
              ))}
            </div>
            <Row style={{padding: 40}}>
                <Col xs={12}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Qy4Wq0CjGjw" ></iframe>
                </Col>
                <Col xs={12} style={{textAlign:'center'}}>
                    <AboutUs />
                </Col>
            </Row>
            <OurPartners />
            <SignUp />
        </div>
    );
}

export default HomeScreen;
