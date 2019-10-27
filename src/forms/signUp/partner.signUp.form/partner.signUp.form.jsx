import React from 'react';

import FormCreator from 'components/formCreator';
import {partnerSignUpTForm} from 'forms/signUp/partner.signUp.form/partner.signUp.tForm';


const PartnerSignUpForm = ({next, data, setData}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={partnerSignUpTForm}

            buttonType='block'
            submitButtonText='Next'
            onSubmit={(objForm) => {
                setData({
                    ...data,
                    partner: objForm.getFieldsValue()
                });
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

export default PartnerSignUpForm;
