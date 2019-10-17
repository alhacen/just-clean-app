import {FORM_ELEMENT} from 'constants/formFields.constant';

export const otpSignUpTForm = () => [
    {
        label: 'Phone Number',
        name: 'phone_no',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    }, {
        label: 'Alternate number',
        name: 'alternate_mobile_no',
        type: FORM_ELEMENT.INPUT,
        rules: [{pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    }, {
        label: 'One Time Password',
        name: 'otp',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{6}$/, message: 'Enter 6 digit OTP'}],
    }
];
