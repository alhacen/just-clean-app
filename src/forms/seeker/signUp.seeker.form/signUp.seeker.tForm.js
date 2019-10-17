import {FORM_ELEMENT} from 'constants/formFields.constant';

export const basicSignUpTForm = () => [
    {
        label: 'Name',
        name: 'candidate_name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    }, {
        label: 'Father\'s Name',
        name: 'father_name',
        type: FORM_ELEMENT.INPUT,
    }, {
        label: 'Address',
        name: 'address',
        type: FORM_ELEMENT.TEXTAREA,
        rules: [{required: true},],
    }, {
        label: 'Aadhar Number',
        name: 'aadhar',
        type: FORM_ELEMENT.INPUT,
        rules: [
            {required: true},
            {
                pattern: /^\d{12}$/,
                message: 'Not valid aadhar number',
            },
        ],
    }, {
        label: 'Phone Number',
        name: 'phone_no',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    },
    {
        label: 'Alternate number',
        name: 'alternate_mobile_no',
        type: FORM_ELEMENT.INPUT,
        rules: [{pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
        kwargs: {
            addonBefore: '+91',
        },
    },
];
