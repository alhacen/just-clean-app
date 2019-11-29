import React, {useState, useEffect} from 'react';

import FormCreator from 'components/formCreator';
import {seekerSignUpTForm} from 'forms/signUp/seeker.signUp.form/seeker.signUp.tForm';
import {loadOpenUrl} from 'helpers/api/main.api.helper';


const SeekerSignUpForm = ({next, setData, data, initialValues}) => {
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        const x = async () => {
            setJobTitles(await loadOpenUrl('job-titles/'));
        };

        x();
    }, []);

    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={seekerSignUpTForm('', {
                ...initialValues,
                jobTitles
            })}
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
