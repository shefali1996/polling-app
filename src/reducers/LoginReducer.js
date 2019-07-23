const initialState = {
  error: 1,
  token:'',
  loginStatus: false
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESPONSE_ACTION":
      if (action.payload.error === 0) {
        return {
          ...state,
          error: action.payload.error,
          token:action.payload.token
        };
      } else
        return {
          ...state
        };
    case "CHANGE_ERROR_VALUE":
      return {
        ...state,
        error: 1
      };
    case "LOGIN_STATUS":
      if (action.payload) {
        return {
          ...state,
          loginStatus: true
        };
      } else {
        return {
          ...state
        };
      }
  }
  return state;
};
