import {FORM_ELEMENT} from 'constants/formFields.constant';
import {stateChoices} from 'constants/choices';

export const employerSignUpTForm = () => [
    {
        label: 'Company Name',
        name: 'name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    }, {
        label: 'Company Type',
        name: 'type',
        type: FORM_ELEMENT.SELECT,
        rules: [
            {required: true},
        ],
        options: {
            S: 'Proprietorship',
            O: 'One Person Company',
            '8': 'Section 8 Company',
            P: 'Partnership',
            L: 'Limited Liability Partnership',
            C: 'Pvt. Ltd.',
            M: 'Public Limited'
        }
    }, {
        label: 'Website',
        name: 'website',
        type: FORM_ELEMENT.INPUT
    }, {
        label: 'Company Phone',
        name: 'phone',
        kwargs: {
            placeholder: 'Official phone number of your company',
        },
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian phone number'}],
    }, {
        label: 'Company Email',
        name: 'email',
        type: FORM_ELEMENT.INPUT,
        kwargs: {
            placeholder: 'Official email of your company',
        },
        rules: [{required: true, type: 'email'}],
    }, {
        label: 'Registered Address',
        name: 'address',
        kwargs: {
            placeholder: 'Full registered address of your company',
        },
        type: FORM_ELEMENT.TEXTAREA,
        rules: [
            {required: true},
        ],
    }, {
        label: 'City',
        name: 'city',
        type: FORM_ELEMENT.INPUT,
        rules: [
            {required: true},
        ],
    }, {
        label: 'Pin Code',
        name: 'pin_code',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}, {pattern: /^\d{6}$/, message: 'Not a Valid Indian Pin-Code'}],
    }, {
        label: 'State',
        name: 'state',
        type: FORM_ELEMENT.SELECT,
        rules: [{required: true}],
        options: stateChoices,
    }, {
        label: 'Your Name',
        name: 'contact_person_name',
        type: FORM_ELEMENT.INPUT,
        kwargs: {placeholder: 'You will be treated as main contact person'},
        rules: [{required: true}],
    }, {
        label: 'Your Designation',
        name: 'contact_person_designation',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    },
];
