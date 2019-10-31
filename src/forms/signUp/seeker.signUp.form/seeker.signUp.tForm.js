import {FORM_ELEMENT} from 'constants/formFields.constant';
import {educationalQualificationChoices, jobTitleChoices, stateChoices} from 'constants/choices';

export const seekerSignUpTForm = (state, initialValues) => {
    return [
        {
            label: 'Name',
            name: 'name',
            type: FORM_ELEMENT.INPUT,
            rules: [{required: true}],
            kwargs: {
                placeholder: 'प्रत्याशी का नाम'
            }
        }, {
            label: 'Father\'s Name',
            name: 'fathers_name',
            type: FORM_ELEMENT.INPUT,
            rules: [{required: true},],
            kwargs: {
                placeholder: 'पिता का नाम'
            }
        }, {
            label: 'Gender',
            name: 'gender',
            type: FORM_ELEMENT.SELECT,
            rules: [{required: true},],
            options: {
                'M': 'Male',
                'F': 'Female',
                'O': 'Others'
            },
        }, {
            label: 'Date of birth',
            name: 'dob',
            type: FORM_ELEMENT.DATE_TIME_PICKER,
            rules: [{required: true},],
            kwargs: {
                placeholder: 'जन्म की तारीख'
            }
        }, {
            label: 'Address',
            name: 'address',
            type: FORM_ELEMENT.TEXTAREA,
            rules: [{required: true},],
            kwargs: {
                placeholder: 'पता'
            }
        }, {
            label: 'City',
            name: 'city',
            type: FORM_ELEMENT.INPUT,
            rules: [{required: true}],
        }, {
            label: 'Pin Code',
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
            kwargs: {
                placeholder: 'शैक्षिक योग्यता'
            }
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
            },
            kwargs: {
                placeholder: 'काम का अनुभव'
            }
        }, {
            label: 'Aadhar Number',
            name: 'aadhar',
            type: FORM_ELEMENT.INPUT,
            rules: [{required: true}, {pattern: /^\d{12}$/, message: 'Not a valid aadhar number'}],
            kwargs: {
                placeholder: 'आधार नंबर'
            }
        }, {
            label: 'Job looking for',
            name: 'job_title',
            type: FORM_ELEMENT.SELECT,
            rules: [{required: true},],
            options: jobTitleChoices,
            kwargs: {
                placeholder: 'किस नौकरी के लिए'
            }
        }, {
            name: 'partner_code',
            type: FORM_ELEMENT.HIDDEN,
            initialValue: initialValues['partner']
        }
    ];
};
