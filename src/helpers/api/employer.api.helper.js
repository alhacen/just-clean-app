import {loadOpenUrl} from 'helpers/api/main.api.helper';

const EMPLOYER_SIGNUP = '/employer/employerinfo/';

export const employerSignUp = (data) => loadOpenUrl(EMPLOYER_SIGNUP, {
    data: data,
    method: 'POST'
});
