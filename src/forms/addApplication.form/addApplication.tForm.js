import {FORM_ELEMENT} from 'constants/formFields.constant';
import {educationalQualificationChoices} from 'constants/choices';


export const addApplicationTForm = (state, initialValues) => [
    {
        label: 'Title',
        name: 'title',
        initialValue: initialValues.title,
        type: initialValues.jobTitles.length !== 0 ? FORM_ELEMENT.SELECT : FORM_ELEMENT.INPUT,
        rules: [{required: true},],
        options: initialValues.jobTitles ? (() => {
            let x = {};
            initialValues.jobTitles.map(jobs => {
                x[jobs.title] = jobs.title;
                return ''
            });

            return x;
        })() : [],
        kwargs: {
            placeholder: initialValues.jobTitles.length === 0 ? 'Loading...' : 'Select a job',
            disabled: initialValues.jobTitles.length === 0
        }
    }, {
        label: 'Number of vacancies',
        name: 'vacancies',
        type: FORM_ELEMENT.INPUT_NUMBER,
        rules: [
            {required: true},
        ],
    }, {
        label: 'Min Experience',
        name: 'min_experience',
        type: FORM_ELEMENT.SELECT,
        rules: [
            {required: true},
        ],
        options: {
            0: '0 to 6 months',
            1: '6 months to 1 year',
            2: '1 year to 2 year',
            3: '2 year to 3 year',
            4: '3 year to 4 year',
            5: '4 year to 5 year',
            6: 'Above 5 year'
        }
    }, {
        label: 'Job Location',
        name: 'location',
        type: FORM_ELEMENT.TEXTAREA,
        rules: [{required: true}],
        kwargs: {
            placeholder: 'Enter full address'
        }
    }, {
        label: 'Gender',
        name: 'gender',
        type: FORM_ELEMENT.SELECT,
        initialValue: '',
        options: {
            '': 'All',
            'M': 'Male',
            'F': 'Female',
            'O': 'Others'
        },
    }, {
        label: 'Min Qualification',
        name: 'educational_qualification',

        type: FORM_ELEMENT.SELECT,
        rules: [{required: true},],
        options: educationalQualificationChoices
    }, {
        label: 'Questions to ask',
        name: 'questions',
        type: FORM_ELEMENT.TEXTAREA,
    }, {
        label: 'Salary CTC',
        name: 'salary_range',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
        kwargs: {
            addonAfter: 'per month',
            addonBefore: 'INR',
            placeholder: '10,000 - 20,000'
        }
    }, {
        label: 'Salary in hand',
        name: 'salary_range_in_hand',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
        kwargs: {
            addonAfter: 'per month',
            addonBefore: 'INR',
            placeholder: '7,500 - 15,000'
        }
    }, {
        label: 'Application Open till',
        name: 'apply_till',
        type: FORM_ELEMENT.DATE_TIME_PICKER,
        rules: [{required: true}],
        kwargs: {
            format: 'YYYY-MM-DD',
        },
    }, {
        label: 'Eligibility',
        name: 'eligibility',
        type: FORM_ELEMENT.TEXTAREA,
    }, {
        label: 'Additional Info',
        name: 'additional_info',
        type: FORM_ELEMENT.TEXTAREA,
    }, {
        label: 'Reporting Location',
        name: 'reporting_location',
        type: FORM_ELEMENT.TEXTAREA,
        rules: [{required: true}],
        kwargs: {
            placeholder: 'Full address where seeker has to report'
        }
    }
];
