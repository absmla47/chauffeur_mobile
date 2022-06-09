import {LOGIN_USER, LOGIN_USER_SUCCESS} from '../actionTypes';
const initAuthState = {
  loading: false,
  token: '',
  userInfo: null,
};

const authReducer = (state = initAuthState, action) => {
  let {type, payload} = action;
  switch (type) {
    case LOGIN_USER:
      return {...state, loading: true};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        userInfo: payload.userInfo,
      };

    default:
      return state;
  }
};

export default authReducer;
