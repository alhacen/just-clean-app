import React from 'react';
import {Badge, Card, Col} from 'antd';
import {Link} from 'react-router-dom';
import {jobImageConstant} from 'constants/jobImages.constant';
import {selectScreen} from 'helpers/screen.helper';


const JobImage = ({label, count, link = null}) => {

    let image = jobImageConstant[label];
    if (!image)
        image = 'job-seeker.png';

    const badge = (
        <Badge count={count} style={{}}>
            <Card bordered={false} style={{borderRadius: 0, height: 140, width: 175, textAlign: 'center'}}>
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
        <Col xs={12} sm={6} md={3}>
            <div>
                {link ? (
                <Link to={link}>
                    {badge}
                </Link>
            ) : badge}
            </div>
        </Col>
    )
};


export default JobImage;
