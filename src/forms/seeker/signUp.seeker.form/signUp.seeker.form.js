import React from 'react';

import FormCreator from 'components/formCreator';
import {basicSignUpTForm} from 'forms/seeker/signUp.seeker.form/signUp.seeker.tForm';


const SignUpSeekerForm = () => {
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

export default SignUpSeekerForm;
