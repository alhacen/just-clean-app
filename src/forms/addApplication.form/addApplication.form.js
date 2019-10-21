import React from 'react';
import {withRouter} from 'react-router-dom';

import FormCreator from 'components/formCreator';
import {addApplicationTForm} from 'forms/addApplication.form/addApplication.tForm';
import {loadSecureUrl} from 'helpers/api/main.api.helper';
import {notification} from 'antd';


const AddApplicationForm = ({history}) => {
    const form = (
        // @ts-ignore
        <FormCreator
            formTemplate={addApplicationTForm()}

            buttonType='block'
            submitButtonText='Next'
            onSubmit={async (objForm) => {
                try{
                    await loadSecureUrl('/employer/jobs/', {
                        method: 'POST',
                        data: objForm.getFieldsValue()
                    });
                    notification.success({
                        message: 'Added new job'
                    });
                    history.push('/');
                } catch (e) {
                    notification.error({
                        message: 'An unknown error occurred'
                    })
                }
            }}
        />
    );

    return (
        <div>
            {form}
        </div>
    );
};

export default withRouter(AddApplicationForm);
