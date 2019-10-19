import {FORM_ELEMENT} from 'constants/formFields.constant';

export const employerSignUpTForm = () => [
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
    type: FORM_ELEMENT.SELECT,
    rules: [
      {required: true},
    ],
    options: {
      I: 'Individual',
      P: 'Proprietorship',
      L: 'Pvt. Ltd.'
    }
  },
  {
    label: 'Address',
    name: 'address',
    kwargs: {
      placeholder: 'ex: Delhi',
    },
    type: FORM_ELEMENT.TEXTAREA,
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
