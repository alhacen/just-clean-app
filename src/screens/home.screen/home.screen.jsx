import React, {useState, useEffect} from 'react';
import {Row, Col, Typography} from 'antd';

import JobSeeker from 'assets/images/job-seeker.png';
import SignInCard from 'components/signInCard';
import AboutUs from 'components/home/aboutUs'
import OurPartners from 'components/home/ourPartners'
import {BADGES} from 'constants/home/badges.home.constant';


const {Title, Text} = Typography;

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
        <div className='container'>
            <Row>
                <Col xs={24} style={{textAlign: 'center'}}>
                    <Title style={{margin: 0, color: '#F89A51'}}>
                        Just Clean Rojgar
                    </Title>
                    <Text style={{margin: 0}} disabled>
                        CONNECTING EVERY JOB SEEKER WITH OPPORTUNITIES
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col xs={24}>
                    <div style={{position: 'relative'}}>
                        <img src={JobSeeker} alt="Job seeker" className="job-seeker-image"
                             style={{position: 'absolute', zIndex: -1}}/>
                        <Col xs={24} sm={18} md={12} lg={8} style={{padding: 20, float: 'right'}}>
                            <SignInCard/>
                        </Col>
                    </div>
                </Col>

                <Col xs={0} sm={24}>
                    <div className='badge-container'>
                        {BADGES.map(({badge, info}, index) => (
                            <div key={index.toString()}>
                                <img src={badge} alt={info} title={info} className='responsive-img'/>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            <Row style={{padding: 20}}>
                <Col xs={24} sm={12} className='container'>
                    <iframe width="100%" height="315" title='About Just Clean'
                            src="https://www.youtube.com/embed/Qy4Wq0CjGjw"/>
                </Col>
                <Col xs={24} sm={12}>
                    <AboutUs/>
                </Col>
            </Row>
            <OurPartners/>
        </div>
    );
}

export default HomeScreen;
