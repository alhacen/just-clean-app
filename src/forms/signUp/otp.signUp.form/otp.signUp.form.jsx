import React from 'react';

import FormCreator from 'components/formCreator';
import {otpSignUpTForm} from './otp.signUp.tForm';


const OtpSignUpForm = () => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={otpSignUpTForm}
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

export default OtpSignUpForm;
