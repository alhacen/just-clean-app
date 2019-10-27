import {lazy} from 'react';
import {
    HOME_PATH,
    SIGN_IN_PATH
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
        path: '/forgot-password/',
        title: 'Reset your password',
        screen: lazy(() => import('screens/forgotPassword.screen')),
    }, {
        path: '/seeker/sign-up/',
        title: 'Sign Up and get Hired',
        screen: lazy(() => import('screens/seeker/signUp.screen')),
    }, {
        path: '/partner/seeker/sign-up/:partner/',
        title: 'Sign Up and get Hired',
        screen: lazy(() => import('screens/seeker/signUp.screen')),
    }, {
        path: '/employer/sign-up/',
        title: 'Sign Up to hire',
        screen: lazy(() => import('screens/employer/signUp.screen')),
    }, {
        path: '/partner/sign-up/',
        title: 'Partner Sign Up',
        screen: lazy(() => import('screens/partner/signUp.screen')),
    }, {
        path: '/seeker/',
        title: 'Seeker Home',
        screen: lazy(() => import('screens/seeker/main.seeker')),
        exact: false
    }, {
        path: '/employer/',
        title: 'Employer Home',
        screen: lazy(() => import('screens/employer/main.employer')),
        exact: false
    }, {
        path: '/partner/',
        title: 'Partner Home',
        screen: lazy(() => import('screens/partner/main.partner')),
        exact: false
    }, {
        path: '/welcome/',
        title: 'Employer Home',
        screen: lazy(() => import('screens/welcome.screen')),
        exact: false
    },
];
