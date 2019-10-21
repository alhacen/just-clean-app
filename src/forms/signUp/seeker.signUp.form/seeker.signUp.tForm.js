import {FORM_ELEMENT} from 'constants/formFields.constant';

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
        options: {
            'National Capital Territory of Delhi': 'National Capital Territory of Delhi'
        },
        rules: [{required: true},],
    }, {
        label: 'Qualification',
        name: 'educational_qualification',
        type: FORM_ELEMENT.SELECT,
        options: {
            'BELOW 5th Class': 'BELOW 5th Class',
            'Class 5th to 9th': 'Class 5th to 9th',
            '10th pass': '10th pass',
            '12th pass': '12th pass',
            'ITI': 'ITI',
            'Polytechnic': 'Polytechnic',
            'Diploma': 'Diploma',
            'Graduate (B.Sc., B.A., B.Com.)': 'Graduate (B.Sc., B.A., B.Com.)',
            'Other Graduate (Any Stream)': 'Other Graduate (Any Stream)',
            'B.Tech. (Any Stream)': 'B.Tech. (Any Stream)',
            'M.Tech. (Any Stream)': 'M.Tech. (Any Stream)',
            'Post graduate (Any stream)': 'Post graduate (Any stream)',
            'MBA/PGDM (Any Stream)': 'MBA/PGDM (Any Stream)'
        },
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
    // {
    //     label: 'Aadhar Number',
    //     name: 'adhaar_no',
    //     type: FORM_ELEMENT.INPUT,
    //     rules: [
    //         {required: true},
    //         {
    //             pattern: /^\d{12}$/,
    //             message: 'Not valid aadhar number',
    //         },
    //     ],
    // }
];
