import {lazy} from 'react';

export const EMPLOYER_COMMON_ROUTES = [
    {
        path: '/',
        title: 'Home employer',
        name: 'Home',
        icon: 'home',
        screen: lazy(() => import('screens/employer/home.employer')),
    },
    {
        path: '/job/',
        title: 'job applications',
        name: 'Jobs Added',
        icon: 'container',
        screen: lazy(() => import('screens/employer/jobAdded.employer')),
    },
    {
        path: '/applications/:job_id/',
        title: 'job applications',
        name: 'Jobs',
        icon: 'solution',
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
