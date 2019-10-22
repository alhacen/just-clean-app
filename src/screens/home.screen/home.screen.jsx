import React, {useState, useEffect} from 'react';
import {Row, Col, Typography} from 'antd';
import {Link} from 'react-router-dom';

import JobSeeker from 'assets/images/job-seeker.png';
import AboutUs from 'components/home/aboutUs'
import OurPartners from 'components/home/ourPartners'
import {BADGES} from 'constants/home/badges.home.constant';

import BG from 'assets/images/BG.jpg';

const {Title, Text} = Typography;


const HomeButton = ({text, background = '#000', hindi}) => (
    <Col xs={24} sm={12} md={6} className='container'>
        <Link to='/sign-in/'>
            <div style={{backgroundColor: background, padding: 10, border: '1px solid #AAA'}} className='center-hv'>
            <div>
                <Title level={2} style={{margin: 0, color: '#FFF'}}>
                    {text}
                </Title>
                <Text style={{margin: 0, color: '#FFF'}}>
                    {hindi}
                </Text>
            </div>
        </div>
        </Link>
    </Col>
);

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
                <Col xs={24} style={{textAlign: 'center', backgroundImage: BG, position: 'relative'}}>
                    {/*<img src={BG} alt="" style={{position: 'absolute', zIndex: -1, width: '100vw', top: 0, left: 0}}/>*/}
                    <br/>
                    <br/>
                    <Title style={{textShadow: '2px 2px 2px #FFF'}}>
                        CONNECTING EVERY JOB SEEKER WITH OPPORTUNITIES
                        <br/>
                        भारत के हर नागरिक को रोज़गार के अवसर
                    </Title>
                    <img src={JobSeeker} alt="Job seeker" className="job-seeker-image"/>

                    <Row className='container'>
                        <HomeButton text='Job Seeker' hindi='नौकरी खोजने वालों के लिए' background='#00903D'/>
                        <HomeButton text='Job Seeker Premium' hindi='नौकरी खोजने वालों के लिए प्रीमियम सर्विस'
                                    background='#AFE13A'/>
                        <HomeButton text='Partner' hindi='पार्टनरों के लिए' background='#DCC83A'/>
                        <HomeButton text='Training' hindi='प्रशिक्षण' background='#414141'/>
                        <HomeButton text='Employers' hindi='नियोक्ताओं के लिए' background='#081951'/>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={24}>
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
                <Col xs={24} sm={12}>
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
