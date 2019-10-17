import React from 'react';
import {Typography} from 'antd';

import FormCreator from 'components/formCreator';
import {basicSignUpTForm} from './signUp.tForm';


const {Title} = Typography;

const SignUpForm = () => {
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
      {form}
    </div>
  );
};

export default SignUpForm;
