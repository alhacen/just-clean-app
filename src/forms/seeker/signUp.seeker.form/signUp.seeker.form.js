import React from 'react';

import FormCreator from 'components/formCreator';
import {signUpSeekerTForm} from 'forms/seeker/signUp.seeker.form/signUp.seeker.tForm';


const SignUpSeekerForm = () => {
  const form = (
    // @ts-ignore
    <FormCreator
      formTemplate={signUpSeekerTForm}

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
