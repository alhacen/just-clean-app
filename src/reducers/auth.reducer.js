import {USER_SIGNED_IN, USER_SIGNED_OUT} from 'actions';

const initialState = {
    isAuthenticated: false,
    type: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case USER_SIGNED_OUT:
            return {
                ...state,
                isAuthenticated: false
            };

        default:
            return state
    }
};
