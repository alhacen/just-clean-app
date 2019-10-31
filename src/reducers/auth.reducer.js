import {CONNECTED_WITH_SERVER, USER_SIGNED_IN, USER_SIGNED_OUT, TRYING_CONNECTION_WITH_SEVER} from 'actions';
import {reactLocalStorage} from 'reactjs-localstorage';

const initialState = {
    isAuthenticated: false,
    isConnected: false,
    user: {
        'name': '',
        'email': '',
        'phone': '',
        'type': ''
    }
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return {
                ...state,
                isAuthenticated: true,
                isConnected: true,
                user: action.user
            };
        case USER_SIGNED_OUT:
            reactLocalStorage.remove('API_TOKENS');
            return {
                ...state,
                isAuthenticated: false
            };

        case CONNECTED_WITH_SERVER:
            return {
                ...state,
                isConnected: true
            };
        case TRYING_CONNECTION_WITH_SEVER:
            return {
                ...state,
                isConnected: false
            };

        default:
            return state
    }
};
