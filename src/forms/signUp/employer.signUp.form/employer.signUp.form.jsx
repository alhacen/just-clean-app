import React from 'react';

import FormCreator from 'components/formCreator';
import {employerSignUpTForm} from 'forms/signUp/employer.signUp.form/employer.signUp.tForm';


const EmployerSignUpForm = ({next}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={employerSignUpTForm}

            buttonType='block'
            submitButtonText='Next'
            onSubmit={(objForm) => {
                next()
            }}
        />
    );

    return (
        <div>
            {form}
        </div>
    );
};

export default EmployerSignUpForm;
