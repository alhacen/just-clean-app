import React, {FC} from 'react';
import {Typography} from 'antd';

import FormCreator from '../../components/formCreator';
import {basicSignUpTForm} from '../signUp.tForm';


const {Title} = Typography;

const SignUp = () => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={basicSignUpTForm}

      buttonType='block'
      submitButtonText='Next'
      onSubmit={(objForm) => {
      }}
    />
  );

  return (
    <div>
      <Title level={3}>Basic details</Title>
      If you feel that your entry is correct and form is still showing error, please do report
      issue.
      {form}
    </div>
  );
};

export default SignUp;