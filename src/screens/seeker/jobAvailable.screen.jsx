import React from 'react';
import {Button, Card, Col, Descriptions, Icon, Row, Skeleton, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
const { Title } = Typography;
let jobs=[];
const jobAvailable = () => (
    <div className='full-page'>
        <div style={{maxWidth: '95vw',padding:'25px'}}>
<div>
      <Title level={3}>Job Available</Title>
      {jobs.length === 0 ? (
        <Card>
          <Empty description='No Job Available'>
            <Link to='/recruitment/'>
              <Button>Edit Preference</Button>
            </Link>
          </Empty>
        </Card>
      ) : null}
      {jobs.map(job => {
        return (
        <Link to={`/company/${job.company_id}/job/${job.job_id}/`}>
          <Card>
            <Descriptions title={`${job.company} - ${job.job}`}>
              <Descriptions.Item label='Posted on'>
                {new Date(job.posted_date).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Last Date'>
                {new Date(job.last_date).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Current Location'>{job.location}</Descriptions.Item>
            </Descriptions>
            <Link to={`/company/${job.company_id}/job/${job.job_id}/`}>
              <Button type='primary'>View full details</Button>
            </Link>
          </Card>
          </Link>
        );
      })}
    </div>
        </div>
    </div>
);

export default jobAvailable;
