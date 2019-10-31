import React from 'react';
import {Badge, Card, Col} from 'antd';
import {Link} from 'react-router-dom';
import {jobImageConstant} from 'constants/jobImages.constant';


const JobImage = ({label, count, link = null}) => {

    let image = jobImageConstant[label];
    if (!image)
        image = 'job-seeker.png';

    const badge = (
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
    );

    return (
        <Col xs={12} sm={6} md={3} style={{margin: 10}}>
            {link ? (
                <Link to={link}>
                    {badge}
                </Link>
            ) : badge}
        </Col>
    )
};


export default JobImage;
