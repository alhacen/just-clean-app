import React from 'react';

import FormCreator from 'components/formCreator';
import {passwordSignUpTForm} from './password.signUp.tForm';


const PasswordSignUpForm = () => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={passwordSignUpTForm}
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

export default PasswordSignUpForm;
