import {FORM_ELEMENT} from 'constants/formFields.constant';

export const passwordSignUpTForm = () => [
    {
        label: 'Email',
        name: 'email',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true, type: 'email'}],
    }, {
        label: 'Phone',
        name: 'phone',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    }, {
        label: 'Alternate Number',
        name: 'alternate_phone',
        type: FORM_ELEMENT.INPUT,
    }, {
        label: 'Password',
        name: 'password',
        type: FORM_ELEMENT.PASSWORD,
        rules: [{required: true, min: 6}],
    }
];
