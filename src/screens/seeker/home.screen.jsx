import React from 'react';
import {Button, Card, Col, Descriptions, Icon, Row, Skeleton, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
const { Title } = Typography;
let jobs=[{'job':'React Developer','company':'aria-16','applied_at':'10-05-2019','updated':'10-05-2019','round':'1','status':'A'}];
const home = () => (
    <div className='full-page'>
        <div style={{maxWidth: '95vw',padding:'25px'}}>
<div>
      <Title level={3}>Job Applied</Title>
      {jobs.length === 0 ? (
        <Card>
          <Empty description='No Job Available'>
            <Link to='job-available/'>
              <Button>Find Jobs</Button>
            </Link>
          </Empty>
        </Card>
      ) : null}
      {jobs.map(job => {
        return (
        <Link to={`company/${job.company_id}/job/${job.job_id}/`}>
          <Card>
            <Descriptions title={`${job.company} - ${job.job}`}>
              <Descriptions.Item label='Applied on'>
                {new Date(job.applied_at).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Last updated'>
                {new Date(job.updated).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Current Round'>{job.round}</Descriptions.Item>
              <Descriptions.Item label='Status'>
                {() => {
                  switch (job.status) {
                    case 'A':
                      return 'Applied';
                    case 'R':
                      return 'Rejected';
                    case 'O':
                      return 'On going';
                    case 'P':
                      return 'Placed';
                    default:
                      return 'Unknown';
                  }
                }}
              </Descriptions.Item>
            </Descriptions>
            <Link to={`company/${job.company_id}/job/${job.job_id}/`}>
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

export default home;
