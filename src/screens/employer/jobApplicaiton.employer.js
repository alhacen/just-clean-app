import React from 'react';
import {Button, Card, Col, Descriptions, Icon, Row, Skeleton, Typography, Empty} from 'antd';
import {Link} from 'react-router-dom';
const { Title } = Typography;
let seekers=[{'seeker_id':'1','name':"Ahmad Hassan Ansari",'applied':'10-05-2019','qualification':'B.tech cse','experience':'no experience'}];
const jobAvailable = () => (
    <div className='full-page'>
        <div style={{maxWidth: '95vw',padding:'25px'}}>
<div>
      <Title level={3}>React Developers - Aria16</Title>
      <Title level={4}>Applications: </Title>
      {seekers.length === 0 ? (
        <Card>
          <Empty description='No Job Applications'>
          </Empty>
        </Card>
      ) : null}
      {seekers.map(seeker => {
        return (
        <Link to={`applied-seeker-profile/${seeker.seeker_id}`}>
          <Card>
            <Descriptions title={`${seeker.name}`}>
              <Descriptions.Item label='Applied on'>
                {new Date(seeker.applied).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label='Qualification'>
                {seeker.qualification}
              </Descriptions.Item>
              <Descriptions.Item label='Experience'>{seeker.experience}</Descriptions.Item>
            </Descriptions>
          </Card>
          </Link>
        );
      })}
    </div>
        </div>
    </div>
);

export default jobAvailable;
