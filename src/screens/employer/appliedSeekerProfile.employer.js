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
    title: 'react developer',name:'Ahmad Hassan Ansari',
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
    resume:{
        name:'Ahmad Hassan Ansari',
        job_experience:'2 years',
        email:'asdf@asdf.me',
        mobile_no:'9876543210',
        user_profile:'IT/ITeS'
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
    resume,
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
        {resume.name}
      </Title>
      <Card>
        <Descriptions title='Basic info'>
          <Descriptions.Item label='Name'>{resume.name}</Descriptions.Item>
          <Descriptions.Item label='Mobile No'>{resume.mobile_no}</Descriptions.Item>
          <Descriptions.Item label='e-Mail'>{resume.email}</Descriptions.Item>
          <Descriptions.Item label='User Profile'>{resume.user_profile}</Descriptions.Item>
          <Descriptions.Item label='Work Experience'>{resume.job_experience}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
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