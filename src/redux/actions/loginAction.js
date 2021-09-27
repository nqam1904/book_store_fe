export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";

export const loginAction = (payload) => {
  return {
    type: SIGN_IN,
    payload: payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: payload,
  };
};

export const signOutAction = () => {
    return {
      type: SIGN_OUT,
    };
}