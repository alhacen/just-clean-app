import {FORM_ELEMENT} from 'constants/formFields.constant';

export const signUpEmployerTForm = () => [
  {
    label: 'Company Name',
    name: 'company_name',
    kwargs: {
      placeholder: 'ex: aria-16',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Employers Type',
    name: 'employer_type',
    kwargs: {
      placeholder: 'ex: ',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
    ],
  },
  {
    label: 'Address',
    name: 'address',
    kwargs: {
      placeholder: 'ex: Delhi',
    },
    type: FORM_ELEMENT.INPUT,
    rules: [
      {required: true},
    ],
  },
  {
    label: 'Contact Person Name',
    name: 'contact_person_name',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Number',
    name: 'phone_number',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}, {pattern: /^\d{10}$/, message: 'Not a Valid Indian Phone Number'}],
    kwargs: {
      addonBefore: '+91',type: FORM_ELEMENT.SELECT,
    rules: [{required: true}],
    options: {
      '1': '1st year',
      '2': '2nd year',
      '3': '3rd year',
      '4': '4th year',
      '5': '5th year',
    },
    },
  },
   {
    label: 'Contact Person Email',
    name: 'contact_person_mail',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Contact Person Name',
    name: 'contact_person_name',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}],
  },
  {
    label: 'Password',
    name: 'password',
    type: FORM_ELEMENT.PASSWORD,
    rules: [{required: true}],
  },
  {
    label: 'City',
    name: 'city',
    type: FORM_ELEMENT.SELECT,
    rules: [{required: true}],
    options: {
      '1': 'Delhi',
      '2': 'Azamgarh',
    },
  },
  {
    label: 'State',
    name: 'state',
    type: FORM_ELEMENT.SELECT,
    rules: [{required: true}],
    options: {
      '1': 'Delhi',
      '2': 'Azamgarh',
    },
  },
  {
    label: 'Pin Code',
    name: 'pin_code',
    type: FORM_ELEMENT.INPUT,
    rules: [{required: true}, {pattern: /^\d{6}$/, message: 'Not a Valid Indian Pin-Code'}],
  },
];
