import * as Action from "../actions/loginAction";
const initialState = {
  user: {
    firstName: "",
    lastName: "",
    isActive: null,
    phone: "",
    email: "",
    id: 0,
    createDate: "",
    writeDate: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case Action.SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
