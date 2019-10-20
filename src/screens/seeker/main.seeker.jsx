import React from 'react';
import Portal from 'components/portal';
import {SEEKER_COMMON_ROUTES, SEEKER_EXTRA_ROUTES} from 'constants/routes/main.routes.constant';

const SeekerMain = () => {
    console.log('rhgyuwgfyu');

    return (
        <Portal
            baseLocation='/seeker/'
            extraRoutes={SEEKER_EXTRA_ROUTES}
            sideRoutes={SEEKER_COMMON_ROUTES}
            allowedType='S'
        />
    );
};

export default SeekerMain;
