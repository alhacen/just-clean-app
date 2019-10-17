import React, {FC, useState, useEffect} from 'react';
import {Typography, Tabs, Descriptions, Card, Collapse, Skeleton, Result} from 'antd';
import {withRouter} from 'react-router-dom';
//import {applyToJobAPI, getJobDetailsAPI} from '../../helpers/api/company.api.helper';

interface IProps {
  match: any;
  history: any;
}

const {Title, Text} = Typography;
const {TabPane} = Tabs;
const {Panel} = Collapse;

const applicationConfirmation = `# Notice
- By clicking on apply you agree to our terms and condition for use of this application
- By clicking on apply you agree to share all your provided details to the respective company.
- You confirm that the information provided is up-to-date and correct.
- You confirm that you read all the details of this job and you are eligible for the same.
- You also confirm to abide university rules and will abide to them.
- **You can not edit your application later.**
company will see your resume which is at the time of application**
*If any of the above fails your access of portal can be blocked*
`;

const RecruitmentDetailsStudentScreen = ({match, history}: IProps) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [jobDetails, setJobDetails] = useState({
    title: 'react developer',
    package: '10 LPA',
    close: '10-05-2019',
    about: 'asdf',
    rounds: [
      {
        title: 'interview',
        details: 'its just a round',
      },
      {
        title: 'aptitude test',
        details: 'its just another round which should be taken before interview',
      },
    ],
    company: {
      name: 'aria-16',
      about: 'company of students',
    },
    application_format: '',
    application_required: true,
    can_apply: false,
  });



  if (status !== 0)
    return (
      <div className='container full-page center-hv'>
        <Result
          // @ts-ignore
          status={status.toString()}
          title={status.toString()}
          subTitle={status === 404 ? 'This page does not exist' : null}
        />
      </div>
    );
/*
  if (loading)
    return (
      <div className='container grey lighten-3'>
        <Card>
          <Skeleton />
        </Card>
      </div>
    );
*/
  const {
    title,
    package: pay,
    close,
    about,
    rounds,
    company,
    application_required: applicationRequired,
    application_format: application,
    can_apply: canApply,
  } = jobDetails;
/*
  const onSubmit = async (data: any) => {
    try {
      const {company: companyId, job} = match.params;
      await applyToJobAPI(companyId, job, data);
//      openNotificationWithIcon('success', 'Your form is submitted successfully');
      history.push('');
    } catch (e) {
//      if (e.status === 406) htmlNotification('warning', 'You applied to this prior');
//      else htmlNotification('error', 'Correct the error given below', e.data.detail);
    }
  };
*/

  return (
    <div className='container'>
      <Title>
        {title}
        {' - '}
        {company.name}
      </Title>
      <Card>
        <Descriptions title='Basic info'>
          <Descriptions.Item label='Package'>{pay}</Descriptions.Item>
          <Descriptions.Item label='Apply By'>{new Date(close).toLocaleString()}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Title level={3}>
About The Company (
          {company.name}
)
        </Title>
        <Text>

        </Text>
      </Card>
      <br />
      <br />

      <Tabs size='large' className='full-page'>
        <TabPane tab='Details' key='1'>

        </TabPane>

        {canApply ? (
          <TabPane tab='Apply' key='3'>


          </TabPane>
        ) : null}
      </Tabs>
    </div>
  );
};

export default withRouter(RecruitmentDetailsStudentScreen);