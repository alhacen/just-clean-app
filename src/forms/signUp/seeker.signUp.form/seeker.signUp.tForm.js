import {FORM_ELEMENT} from 'constants/formFields.constant';

export const seekerSignUpTForm = () => [
    {
        label: 'Name',
        name: 'candidate_name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    }, {
        label: 'Father\'s Name',
        name: 'father_name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true},],
    }, {
        label: 'Address',
        name: 'address',
        type: FORM_ELEMENT.TEXTAREA,
        rules: [{required: true},],
    }, {
        label: 'Aadhar Number',
        name: 'adhaar_no',
        type: FORM_ELEMENT.INPUT,
        rules: [
            {required: true},
            {
                pattern: /^\d{12}$/,
                message: 'Not valid aadhar number',
            },
        ],
    }
];
