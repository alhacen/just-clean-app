import React from 'react';
import EmployerSignUpForm from 'forms/signUp/employer.signUp.form';
import SignUpCard from 'components/signUpCard';


const EmployerSignUpCard = () => (
    <SignUpCard subTitle='to hire?' component={EmployerSignUpForm}/>
);

export default EmployerSignUpCard;
