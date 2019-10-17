import {lazy} from 'react';
import {
  HOME_PATH, SEEKER_SIGNUP_PATH,
  SIGN_IN_PATH,
  EMPLOYER_SIGNUP_PATH
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
  path: EMPLOYER_SIGNUP_PATH,
    title: 'Sign Up and Hire',
    screen: lazy(() => import('screens/employer/signUp.screen')),
  }
];
