import React, {useState, useEffect} from 'react';
import {Row, Col, Typography, Card, Modal} from 'antd';
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


const HomeButton = ({text, background = '#000', hindi, link = '/sign-in/', onClick}) => (
    <Col xs={24} sm={12} md={6} className='container'>
        <Link to={link} onClick={onClick}>
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

const SeekerButton = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal
                title="Are you already registered / क्या आप पहले से पंजीकृत हैं"
                visible={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                style={{textAlign: 'center'}}
            >
                <Title level={4}>
                    Are you already registered
                    <br/>
                    क्या आप पहले से पंजीकृत हैं
                </Title>

                <Link to={'/sign-in/'}>
                    <div style={{backgroundColor: '#EEE', fontSize: '1.5rem', padding: 10, borderRadius: 10}}>
                        <Text level={3}>
                            Yes, I am Registered <br/>
                            हाँ, मैं पंजीकृत हूँ
                        </Text>
                    </div>
                </Link>

                <br/>
                <br/>

                <Link to={'/seeker/sign-up/'}>
                    <div style={{backgroundColor: '#EEE', fontSize: '1.5rem', padding: 10, borderRadius: 10}}>
                        <Text level={3}>
                            No, please register me <br/>
                            नहीं, कृपया मुझे पंजीकृत करें
                        </Text>
                    </div>
                </Link>


            </Modal>
            <HomeButton
                text='Job Seeker'
                hindi='नौकरी खोजने वालों के लिए'
                background='#00903D'
                link='/seeker/sign-up/'
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }}/>
        </>
    )

};

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
                        <SeekerButton/>
                        {/*<HomeButton text='Job Seeker Premium' hindi='नौकरी खोजने वालों के लिए प्रीमियम सर्विस'*/}
                        {/*            background='#AFE13A'/>*/}
                        <HomeButton text='Partner' hindi='पार्टनरों के लिए' background='#DCC83A'
                                    link='/partner/sign-up/'/>
                        <HomeButton text='Employers' hindi='नियोक्ताओं के लिए' background='#081951'
                                    link='/employer/sign-up/'/>
                        <HomeButton text='Training' hindi='प्रशिक्षण' background='#414141'/>

                    </Row>
                </Col>
            </Row>

            <br/>

            <div style={{textAlign: 'center'}}>
                <Title>
                    We offer jobs for
                </Title>
                <Row style={{textAlign: 'center'}}>
                    <JobImage link='/seeker/sign-up/' label='Machine Operator / Helper'/>
                    <JobImage link='/seeker/sign-up/' label='Driver (Private Vehicles)'/>
                    <JobImage link='/seeker/sign-up/' label='Driver (Commercial Vehicles)'/>
                    <JobImage link='/seeker/sign-up/' label='Driver (Heavy Vehicles - Bus, Truck, Trailer, etc.)'/>
                    <JobImage link='/seeker/sign-up/' label='Security Staff'/>
                    <JobImage link='/seeker/sign-up/' label='Bouncer'/>
                    <JobImage link='/seeker/sign-up/' label='PSO (Personal Security Officer)'/>
                    <JobImage link='/seeker/sign-up/' label='Computer Operator'/>
                    <JobImage link='/seeker/sign-up/' label='Painter'/>
                    <JobImage link='/seeker/sign-up/' label='BPO / Call Centre'/>
                    <JobImage link='/seeker/sign-up/' label='Retail Sales Staff'/>
                    <JobImage link='/seeker/sign-up/' label='Web Developer'/>
                    <JobImage link='/seeker/sign-up/' label='Web Designer'/>
                    <Col xs={12} sm={6} md={3}>
                        <Card bordered={false}
                              style={{borderRadius: 0, height: 140, width: 175, textAlign: 'center'}}>
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

            <Title level={3} style={{margin: 0, textAlign: 'center'}}>
                About Just Clean Rojgar
            </Title>

            <Row style={{padding: 20}}>
                <Col xs={24} sm={12}>
                    <div className='video-container'>
                        <iframe title="About Just Clean Rojgar" width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/Qy4Wq0CjGjw?controls=0" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
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
