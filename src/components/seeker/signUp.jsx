import React from 'react';
import {Card, Typography} from 'antd';
import SignUpCard from 'components/signUpCard';
import SeekerSignUpForm from 'forms/signUp/seeker.signUp.form';


const {Title} = Typography;

const SeekerSignUpCard = () => (
  <SignUpCard component={SeekerSignUpForm} type='OTP' subTitle='to find a job' />
);

export default SeekerSignUpCard;
