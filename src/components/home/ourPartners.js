import React from 'react';
import {Row, Typography, Col, Carousel} from 'antd';

import {OUR_PARTNERS} from 'constants/home/partners.home.constant';

const {Title} = Typography;

const OurPartners = () => (
    <div className='top-recruiter-col'>
        <div className='center'>
            <Title level={3}>Our Partners</Title>
            <br/>
            <Row gutter={48}>
                <Col xs={0} md={2}>
                    &nbsp;
                </Col>
                {OUR_PARTNERS.map((partner, index) => (
                    <Col
                        xs={0}
                        md={4}
                        className='center margin-bottom-20 margin-top-20'
                        key={index.toString()}>
                        <img src={partner} alt='' className='responsive-img'/>
                    </Col>
                ))}

                <Col xs={24} md={0}>
                    <Carousel autoplay dotPosition='bottom' dots={false}>
                        {OUR_PARTNERS.map((partner, index) => (
                            <div key={index.toString()}>
                                <div className='center-hv' style={{width: '100vw', textAlign: 'center'}}>
                                    <img src={partner} alt='' style={{height: 160, padding: 'auto'}}/>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </div>
    </div>
);

export default OurPartners;
