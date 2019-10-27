import {FORM_ELEMENT} from 'constants/formFields.constant';
import {stateChoices} from 'constants/choices';

export const partnerSignUpTForm = () => [
    {
        label: 'Office Name',
        name: 'name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
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
    },  {
        label: 'Office Address',
        name: 'address',
        kwargs: {
            placeholder: 'Full registered address of your office',
        },
        type: FORM_ELEMENT.TEXTAREA,
        rules: [
            {required: true},
        ],
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
