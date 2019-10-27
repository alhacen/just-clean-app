import React, {useState, useEffect} from 'react';
import {Row, Col, Typography, Card} from 'antd';
import {Link} from 'react-router-dom';

import JobSeeker from 'assets/images/job-seeker.png';
import AboutUs from 'components/home/aboutUs'
import OurPartners from 'components/home/ourPartners'
import {BADGES} from 'constants/home/badges.home.constant';

import BG from 'assets/images/BG.jpg';
// import {jobTitleChoices} from 'constants/choices';
import {selectScreen} from 'helpers/screen.helper';

import JobImage from 'components/jobImage';

const {Title, Text} = Typography;


const HomeButton = ({text, background = '#000', hindi, link = '/sign-in/'}) => (
    <Col xs={24} sm={12} md={6} className='container'>
        <Link to={link}>
            <div style={{backgroundColor: background, padding: 10, border: '1px solid #AAA'}} className='center-hv'>
                <div>
                    <Title level={selectScreen(4, 3)} style={{margin: 0, color: '#FFF'}}>
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
                    <br/>
                    <br/>
                    <Title level={selectScreen(4, 3, 1)} style={{textShadow: '2px 2px 2px #FFF'}}>
                        CONNECTING EVERY JOB SEEKER WITH OPPORTUNITIES
                        <br/>
                        भारत के हर नागरिक को रोज़गार के अवसर
                    </Title>
                    <img src={JobSeeker} alt="Job seeker" className="job-seeker-image"/>

                    <Row className='container'>
                        <HomeButton text='Job Seeker' hindi='नौकरी खोजने वालों के लिए' background='#00903D'
                                    link='/seeker/sign-up/'/>
                        <HomeButton text='Job Seeker Premium' hindi='नौकरी खोजने वालों के लिए प्रीमियम सर्विस'
                                    background='#AFE13A'/>
                        <HomeButton text='Partner' hindi='पार्टनरों के लिए' background='#DCC83A' link='/partner/sign-up/'/>
                        <HomeButton text='Employers' hindi='नियोक्ताओं के लिए' background='#081951'
                                    link='/employer/sign-up/'/>
                        <HomeButton text='Training' hindi='प्रशिक्षण' background='#414141'/>

                    </Row>
                </Col>
            </Row>

            <br/>
            <br/>
            <br/>

            <div className='container' style={{textAlign: 'center'}}>
                <Title>
                    We offer jobs for
                </Title>
                <Row style={{textAlign: 'center'}}>
                    <JobImage label='Machine Operator / Helper'/>
                    <JobImage label='Driver (Private Vehicles)'/>
                    <JobImage label='Driver (Commercial Vehicles)'/>
                    <JobImage label='Driver (Heavy Vehicles - Bus, Truck, Trailer, etc.)'/>
                    <JobImage label='Security Staff'/>
                    <JobImage label='Bouncer'/>
                    <JobImage label='PSO (Personal Security Officer)'/>
                    <JobImage label='Computer Operator'/>
                    <JobImage label='Painter'/>
                    <JobImage label='BPO / Call Centre'/>
                    <JobImage label='Retail Sales Staff'/>
                    <JobImage label='Web Developer'/>
                    <JobImage label='Web Designer'/>
                    <Col xs={12} sm={6} md={3} style={{margin: 10}}>
                        <Card bordered={false}
                              style={{borderRadius: 10, height: 140, width: 175, textAlign: 'center'}}>
                            <img
                                src={require('assets/images/jobs/job-seeker.png')}
                                className='responsive-img'
                                style={{height: 50}} alt='And more...'
                            />
                            <br/>
                            <br/>
                            <h4>And more...</h4>
                        </Card>
                    </Col>
                </Row>
            </div>

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
                <Col xs={24} sm={12} className='container'>
                    <AboutUs/>
                </Col>
            </Row>
            <OurPartners/>
        </div>
    );
}

export default HomeScreen;
