import {reactLocalStorage} from 'reactjs-localstorage';
import {notification} from 'antd';
import {USER_SIGNED_IN} from 'actions/index';
import {signInWithOtp, signInWithPassword, userMeta} from 'helpers/api/main.api.helper';

const saveToken = (token) => {
    reactLocalStorage.setObject('API_TOKENS', {
        tokens: token,
        expires: JSON.parse(atob(token.access.split('.')[1])).exp,
    });
};

export const signIn = (username, password, type) => async (dispatch) => {
    try {
        let jwt;

        if (type === 'O') {
            jwt = await signInWithOtp(username, password);
        } else if (type === 'P') {
            jwt = await signInWithPassword(username, password);
        }

        console.log(jwt);
        saveToken(jwt);
        const user = await userMeta();
        notification.success({
            message: 'Welcome'
        });
        dispatch({type: USER_SIGNED_IN, user: user});

    } catch (e) {
        console.log(e);
        notification.error({
            message: 'Error in signing you in',
            description: 'Invalid credentials'
        });
    }
};

export const checkUserAction = () => async (dispatch) => {
    if (reactLocalStorage.get('API_TOKENS')) {
        try {
            const user = await userMeta();
            dispatch({type: USER_SIGNED_IN, user: user});
        } catch (e) {
            localStorage.clear();
        }
    } else {
    }
};
