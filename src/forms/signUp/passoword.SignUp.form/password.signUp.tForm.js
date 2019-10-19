import {FORM_ELEMENT} from 'constants/formFields.constant';

export const passwordSignUpTForm = () => [
    {
        label: 'Email',
        name: 'contact_person_mail',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true, type: 'email'}],
    }, {
        label: 'Phone',
        name: 'phone_number',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    },
    {
        label: 'Password',
        name: 'password',
        type: FORM_ELEMENT.PASSWORD,
        rules: [{required: true, min: 6}],
    }, {
        label: 'Confirm Password',
        name: 'confirm_password',
        type: FORM_ELEMENT.PASSWORD,
        rules: [{required: true, min: 6}],
    }
];
