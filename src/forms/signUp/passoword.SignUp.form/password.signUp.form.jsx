import React from 'react';

import FormCreator from 'components/formCreator';
import {passwordSignUpTForm} from './password.signUp.tForm';


const PasswordSignUpForm = ({next, data, setData}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={passwordSignUpTForm}
            buttonType='block'
            submitButtonText='Create my account'
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

export default PasswordSignUpForm;
