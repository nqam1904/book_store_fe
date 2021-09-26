export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";

const loginAction = (payload) => {
  return {
    type: SIGN_IN,
    payload: payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: payload,
  };
};

const signOutAction = () => {
    return {
      type: SIGN_OUT,
    };
}