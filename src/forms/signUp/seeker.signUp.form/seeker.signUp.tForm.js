import {FORM_ELEMENT} from 'constants/formFields.constant';
import {educationalQualificationChoices, stateChoices} from 'constants/choices';

export const seekerSignUpTForm = () => [
    {
        label: 'Name',
        name: 'name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    }, {
        label: 'Father\'s Name',
        name: 'fathers_name',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true},],
    }, {
        label: 'gender',
        name: 'gender',
        type: FORM_ELEMENT.SELECT,
        rules: [{required: true},],
        options: {
            'M': 'Male',
            'F': 'Female',
            'O': 'Others'
        }
    }, {
        label: 'Date of birth',
        name: 'dob',
        type: FORM_ELEMENT.DATE_TIME_PICKER,
        rules: [{required: true},],
        kwargs: {
            format: 'YYYY-MM-DD',
        },
    }, {
        label: 'PinCode',
        name: 'pin_code',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true, min: 6, max: 6}],
    }, {
        label: 'State',
        name: 'state',
        type: FORM_ELEMENT.SELECT,
        options: stateChoices,
        rules: [{required: true},],
    }, {
        label: 'Qualification',
        name: 'educational_qualification',
        type: FORM_ELEMENT.SELECT,
        options: educationalQualificationChoices,
        rules: [{required: true},],
    }, {
        label: 'Address',
        name: 'address',
        type: FORM_ELEMENT.TEXTAREA,
        rules: [{required: true},],
    }, {
        label: 'Your experience',
        name: 'experience',
        type: FORM_ELEMENT.SELECT,
        rules: [{required: true},],
        options: {
            0: '0 to 6 months',
            1: '6 months ro 1 year',
            2: '1 year to 2 year',
            3: '2 year to 3 year',
            4: '3 year to 4 year',
            5: 'Four year to 5 year',
            6: 'Above 5'
        }
    }
];
