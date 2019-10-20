import React from 'react';
import Portal from 'components/portal';
import {EMPLOYER_COMMON_ROUTES, EMPLOYER_EXTRA_ROUTES} from 'constants/routes/main.routes.constant';

const EmployerMain = () => {
    return (
        <Portal
            baseLocation='/employer/'
            extraRoutes={EMPLOYER_EXTRA_ROUTES}
            sideRoutes={EMPLOYER_COMMON_ROUTES}
            allowedType='E'
        />
    );
};

export default EmployerMain;
