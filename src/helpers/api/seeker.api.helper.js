import {loadOpenUrl} from 'helpers/api/main.api.helper';

const SEEKER_SIGNUP = '/seeker/signup/';

export const seekerSignUp = (data) => loadOpenUrl(SEEKER_SIGNUP, {
    data: data,
    method: 'POST'
});


export const sendOTP = (username) => loadOpenUrl('auth/sign-in/otp/send/', {
    data: {
        username: username
    },
    method: 'POST'
});
