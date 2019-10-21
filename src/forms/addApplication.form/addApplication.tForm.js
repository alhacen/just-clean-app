import {FORM_ELEMENT} from 'constants/formFields.constant';
import {educationalQualificationChoices, jobTitleChoices} from 'constants/choices';


export const addApplicationTForm = () => [
    {
        label: 'Title',
        name: 'title',
        type: FORM_ELEMENT.SELECT,
        rules: [{required: true}],
        options: jobTitleChoices
    },
    {
        label: 'Min Experience',
        name: 'min_experience',
        type: FORM_ELEMENT.SELECT,
        rules: [
            {required: true},
        ],
        options: {
            0: '0 to 6 months',
            1: '6 months ro 1 year',
            2: '1 year to 2 year',
            3: '2 year to 3 year',
            4: '3 year to 4 year',
            5: 'Four year to 5 year',
            6: 'Above 5'
        }
    },
    {
        label: 'Location',
        name: 'location',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    },
    {
        label: 'Gender',
        name: 'gender',
        type: FORM_ELEMENT.SELECT,
        options: {
            'M': 'Male',
            'F': 'Female',
            'O': 'Others'
        }
    },
    {
        label: 'Educational Qualification',
        name: 'educational_qualification',

        type: FORM_ELEMENT.SELECT,
        rules: [{required: true},],
        options: educationalQualificationChoices
    },
    {
        label: 'Salary Range',
        name: 'salary_range',
        type: FORM_ELEMENT.INPUT,
        rules: [{required: true}],
    },
    {
        label: 'Application Open till',
        name: 'apply_till',
        type: FORM_ELEMENT.DATE_TIME_PICKER,
        rules: [{required: true}],
        kwargs: {
            format: 'YYYY-MM-DD',
        },
    },
];
