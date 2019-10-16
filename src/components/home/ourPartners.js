import React from 'react';
import {Row,Typography, Col} from 'antd';
const {Title} = Typography;
const ddu_gky = require('../../assets/top-recruiters/ddu-gky.webp');

const nation_skill_development_carporation = require('../../assets/top-recruiters/nsdc.webp');
const pradhan_mantri_kaushal_kendra = require('../../assets/top-recruiters/pmkk.webp');
const skill_india = require('../../assets/top-recruiters/skill-india.webp');
const uk_skill_dev_m = require('../../assets/top-recruiters/usdm.webp');
const TOP_RECRUITERS = [ddu_gky, nation_skill_development_carporation, pradhan_mantri_kaushal_kendra, skill_india, uk_skill_dev_m];
const OurPartners = () => (


    <div className='full-page container center-hv center top-recruiter-col'>
        <div>
          <Title>Our Partners</Title>

          <Row gutter={24}>
            {TOP_RECRUITERS.map((recruiter, index) => (
              <Col
                xs={24}
                md={8}
                className='center margin-bottom-20 margin-top-20'
                key={index.toString()}>
                <img src={recruiter} alt='' className='max-height-50' />
              </Col>
            ))}
          </Row>
        </div>
      </div>
);

export default OurPartners;





