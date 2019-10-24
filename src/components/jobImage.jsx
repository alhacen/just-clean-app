import React from 'react';
import {Badge, Card, Col} from 'antd';
import {jobImageConstant} from 'constants/jobImages.constant';


const JobImage = ({label, count}) => {

    let image = jobImageConstant[label];
    if (!image)
        image = 'job-seeker.png';

    return (
        <Col xs={12} sm={6} md={3} style={{margin: 10}}>
            <Badge count={count}>
                <Card bordered={false} style={{borderRadius: 10, height: 140, width: 175, textAlign: 'center'}}>
                    <img
                        src={require('assets/images/jobs/' + image)}
                        className='responsive-img'
                        style={{height: 50}} alt={label}
                    />
                    <br/>
                    <br/>
                    {label.substring(0, 30)}
                </Card>
            </Badge>
        </Col>
    )
};


export default JobImage;
