import {FORM_ELEMENT} from 'constants/formFields.constant';

export const passwordSignUpTForm = () => [
    {
        label: 'Email',
        name: 'email',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true, type: 'email'}],
    }, {
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
