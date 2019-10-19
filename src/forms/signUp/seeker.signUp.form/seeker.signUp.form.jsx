import React from 'react';

import FormCreator from 'components/formCreator';
import {seekerSignUpTForm} from 'forms/signUp/seeker.signUp.form/seeker.signUp.tForm';


const SeekerSignUpForm = ({next, setData, data}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={seekerSignUpTForm}

            buttonType='block'
            submitButtonText='Next'
            onSubmit={(objForm) => {
                setData({
                    ...data,
                    ...objForm.getFieldsValue()
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

export default SeekerSignUpForm;
