import React from 'react';
import SignUpCard from 'components/signUpCard';
import PartnerSignUpForm from 'forms/signUp/partner.signUp.form';


const PartnerSignUpCard = () => (
    <SignUpCard subTitle='' component={PartnerSignUpForm} type='PARTNER'/>
);

export default PartnerSignUpCard;
