import React from 'react';
import {Row, Typography, Col} from 'antd';

import {OUR_PARTNERS} from 'constants/home/partners.home.constant';

const {Title} = Typography;

const OurPartners = () => (
    <div className='full-page container center-hv top-recruiter-col'>
        <div className='center'>
            <Title>Our Partners</Title>
            <br/>
            <Row gutter={48}>
                {OUR_PARTNERS.map((partner, index) => (
                    <Col
                        xs={24}
                        md={8}
                        className='center margin-bottom-20 margin-top-20'
                        key={index.toString()}>
                        <img src={partner} alt='' className='max-height-50'/>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
);

export default OurPartners;
