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
        path: '/seeker/sign-up/',
        title: 'Sign Up and get Hired',
        screen: lazy(() => import('screens/seeker/signUp.screen')),
    }, {
        path: '/employer/sign-up/',
        title: 'Sign Up to hire',
        screen: lazy(() => import('screens/employer/signUp.screen')),
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
        path: '/welcome/',
        title: 'Employer Home',
        screen: lazy(() => import('screens/welcome.screen')),
        exact: false
    }, {
        path: '/partner/seeker/sign-up/:partner/',
        title: 'Sign Up and get Hired',
        screen: lazy(() => import('screens/seeker/signUp.screen')),
    },
];

export const SEEKER_COMMON_ROUTES = [
    {
        path: '/',
        title: 'seeker Home path',
        screen: lazy(() => import('screens/seeker/home.screen')),
    }, {
        path: '/jobs/',
        title: 'All jobs',
        screen: lazy(() => import('screens/seeker/jobAvailable.screen')),
    }, {
        path: '/jobs/search/:hash/',
        title: 'All jobs',
        screen: lazy(() => import('screens/seeker/jobAvailable.screen')),
    }, {
        path: '/jobs/applied/',
        title: 'Applied jobs',
        screen: lazy(() => import('screens/seeker/jobApplied.screen')),
    },
];

export const SEEKER_EXTRA_ROUTES = [];

export const EMPLOYER_COMMON_ROUTES = [
    {
        path: '/',
        title: 'Home employer',
        screen: lazy(() => import('screens/employer/home.employer')),
    },
    {
        path: '/applications/:job_id/',
        title: 'job applications',
        screen: lazy(() => import('screens/employer/jobApplicaiton.employer')),
    },
];

export const EMPLOYER_EXTRA_ROUTES = [
    {
        path: '/job/add/:hash/',
        title: 'Add job applications',
        screen: lazy(() => import('screens/employer/addApplication')),
    }, {
        path: '/job/add/',
        title: 'Add job applications',
        screen: lazy(() => import('screens/employer/addApplication')),
    },
];
