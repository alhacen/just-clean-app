import React from 'react';

import FormCreator from 'components/formCreator';
import {seekerSignUpTForm} from 'forms/signUp/seeker.signUp.form/seeker.signUp.tForm';


const SeekerSignUpForm = ({next, setData, data, initialValues}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={seekerSignUpTForm('', initialValues)}
            initialValues={async () => initialValues}
            buttonType='block'
            submitButtonText='Next'
            onSubmit={(objForm) => {
                setData({
                    ...data,
                    seeker: objForm.getFieldsValue()
                });
                next();
            }}
        />
    );

    console.log('FROM seeker.signUpForm', initialValues);

    return (
        <div>
            {form}
        </div>
    );
};


export default SeekerSignUpForm;
