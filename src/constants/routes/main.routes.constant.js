import {lazy} from 'react';
import {
  HOME_PATH, SEEKER_SIGNUP_PATH,
  SIGN_IN_PATH,
  EMPLOYER_SIGNUP_PATH,
  EMPLOYER_HOME_PATH,
  SEEKER_HOME_PATH,
  SEEKER_JOB_AVAILABLE_PATH,
  SEEKER_JOB_RECRUITMENT_DETAILS_PATH
} from './main.paths.constant';

export const COMMON_ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('screens/home.screen')),
  }, {
    path: SIGN_IN_PATH,
    title: 'Sign In',
    screen: lazy(() => import('screens/signIn.screen')),
  }, {
  path: SEEKER_SIGNUP_PATH,
    title: 'Sign Up and get Hired',
    screen: lazy(() => import('screens/seeker/signUp.screen')),
  },
  {
  path: EMPLOYER_HOME_PATH,
    title: 'Home employer',
    screen: lazy(() => import('screens/employer/home.employer')),
  }, {
  path: EMPLOYER_SIGNUP_PATH,
    title: 'Sign Up and Hire',
    screen: lazy(() => import('screens/employer/signUp.screen')),
  },
  {
  path: SEEKER_HOME_PATH,
    title: 'seeker HOme path',
    screen: lazy(() => import('screens/seeker/home.screen')),
  },
  {
  path: SEEKER_JOB_AVAILABLE_PATH,
    title: 'seeker HOme path',
    screen: lazy(() => import('screens/seeker/jobAvailable.screen')),
  },
  {
  path: SEEKER_JOB_RECRUITMENT_DETAILS_PATH,
    title: 'seeker recruitment Details',
    screen: lazy(() => import('screens/seeker/recruitmentDetails.seeker.screen')),
  }
];
