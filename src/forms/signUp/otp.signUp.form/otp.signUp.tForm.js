import {FORM_ELEMENT} from 'constants/formFields.constant';

export const otpSignUpTForm = () => [
    {
        label: 'Phone Number',
        name: 'phone',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    }, {
        label: 'Alternate number',
        name: 'alternate_phone',
        type: FORM_ELEMENT.INPUT,
        rules: [{pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    },
    {
        label: 'Email',
        name: 'email',
        type: FORM_ELEMENT.INPUT,
        rules: [{type: 'email'}],
    },
    // {
    //     label: 'One Time Password',
    //     name: 'otp',
    //     type: FORM_ELEMENT.INPUT,
    //     rules: [{required: true}, {pattern: /^\d{6}$/, message: 'Enter 6 digit OTP'}],
    // }
];
