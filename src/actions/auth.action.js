import {reactLocalStorage} from 'reactjs-localstorage';
import {notification} from 'antd';
import {CONNECTED_WITH_SERVER, TRYING_CONNECTION_WITH_SEVER, USER_SIGNED_IN} from 'actions/index';
import {loadOpenUrl, signInWithOtp, signInWithPassword, userMeta} from 'helpers/api/main.api.helper';

export const saveToken = (token) => {
    reactLocalStorage.setObject('API_TOKENS', {
        ...token,
        expires: parseInt(JSON.parse(atob(token.access.split('.')[1])).exp) * 1000,
    });
};

export const signIn = (username, password, type) => async (dispatch) => {
    try {
        dispatch({
            type: TRYING_CONNECTION_WITH_SEVER
        });

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
        dispatch({type: CONNECTED_WITH_SERVER});
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
        try{
            await loadOpenUrl('ping/');
            dispatch({type: CONNECTED_WITH_SERVER})
        } catch (e) {
            notification.error({
                message: 'We are having trouble connecting with server',
                description: 'Not all services will be available'
            })
        }

    }
};
