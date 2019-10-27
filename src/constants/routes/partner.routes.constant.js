import {lazy} from 'react';

export const PARTNER_COMMON_ROUTES = [
    {
        path: '/',
        title: 'Home employer',
        name: 'Home',
        icon: 'home',
        screen: lazy(() => import('screens/partner/home.partner')),
    }, {
        path: '/seeker/',
        title: 'My Seekers',
        name: 'Home',
        icon: 'user',
        screen: lazy(() => import('screens/partner/seekers.partner')),
    }
];

export const PARTNER_EXTRA_ROUTES = [

];
