import {lazy} from 'react';

export const SEEKER_COMMON_ROUTES = [
    {
        path: '/',
        title: 'seeker Home path',
        name: 'Home',
        icon: 'home',
        screen: lazy(() => import('screens/seeker/home.screen')),
    }, {
        path: '/jobs/',
        title: 'All jobs',
        name: 'Find jobs',
        icon: 'search',
        screen: lazy(() => import('screens/seeker/jobAvailable.screen')),
    },  {
        path: '/jobs/applied/',
        title: 'Applied jobs',
        name: 'Job Applied',
        icon: '',
        screen: lazy(() => import('screens/seeker/jobApplied.screen')),
    },
];

export const SEEKER_EXTRA_ROUTES = [
    {
        path: '/jobs/search/:hash/',
        title: 'All jobs',
        screen: lazy(() => import('screens/seeker/jobAvailable.screen')),
    },
];
