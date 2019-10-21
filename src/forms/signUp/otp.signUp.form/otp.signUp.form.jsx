import React from 'react';

import FormCreator from 'components/formCreator';
import {otpSignUpTForm} from './otp.signUp.tForm';


const OtpSignUpForm = ({setData, next, data}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={otpSignUpTForm}
            buttonType='block'
            submitButtonText='Next'
            onSubmit={(objForm) => {
                setData({
                    ...data,
                    account: objForm.getFieldsValue()
                });
                next();
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
