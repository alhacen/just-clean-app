import React from 'react';
import Portal from 'components/portal';
import {PARTNER_COMMON_ROUTES, PARTNER_EXTRA_ROUTES} from 'constants/routes/partner.routes.constant';

const PartnerMain = () => {
    return (
        <Portal
            baseLocation='/partner/'
            extraRoutes={PARTNER_EXTRA_ROUTES}
            sideRoutes={PARTNER_COMMON_ROUTES}
            allowedType='P'
        />
    );
};

export default PartnerMain;
