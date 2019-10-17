import React from 'react';

import FormCreator from 'components/formCreator';
import {signUpEmployerTForm} from './signUp.employer.tForm';


const SignUpEmployerForm = () => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={signUpEmployerTForm}

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

export default SignUpEmployerForm;
