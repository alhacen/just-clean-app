import {reactLocalStorage} from 'reactjs-localstorage';
import {notification} from 'antd';
import {USER_SIGNED_IN} from 'actions/index';
import {signIn as signInAPI} from 'helpers/api/main.api.helper';

const saveToken = (token) => {
    reactLocalStorage.setObject('API_TOKENS', {
        tokens: token,
        expires: JSON.parse(atob(token.access.split('.')[1])).exp,
    });
};

export const signIn = (username, password) => async (dispatch) => {
    try {
        const jwt = await signInAPI(username, password);
        console.log(jwt);
        saveToken(jwt);
        notification.success({
            message: 'Welcome'
        });
        dispatch({type: USER_SIGNED_IN});
    } catch (e) {
        console.log(e);
        notification.error({
            message: 'Error in signing you in',
            description: 'Invalid credentials'
        });
    }
};
