import React from 'react';
import {withRouter} from 'react-router-dom';
import SignUpCard from 'components/seeker/signUp';

const SignInScreen = ({match}) => {
    const partner = match.params.partner || '';

    return (
        <div className='full-page center-hv'>
            <div style={{width: '500px', maxWidth: '95vw'}}>
                <SignUpCard initialValues={{partner: partner}}/>
            </div>
        </div>
    );
};

export default withRouter(SignInScreen);
