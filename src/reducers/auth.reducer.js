import {USER_SIGNED_IN, USER_SIGNED_OUT} from 'actions';
import {reactLocalStorage} from 'reactjs-localstorage';

const initialState = {
    isAuthenticated: false,
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
                user: action.user
            };
        case USER_SIGNED_OUT:
            reactLocalStorage.remove('API_TOKENS');
            return {
                ...state,
                isAuthenticated: false
            };

        default:
            return state
    }
};
