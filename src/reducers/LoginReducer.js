const initialState = {
  error: 1
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESPONSE_ACTION":
      if (action.payload.error === 0) {
        return {
          ...state,
          error:0
        };
      } else
        return {
          ...state,
        };
      case 'CHANGE_ERROR_VALUE':
        return{
          ...state,
          error:1
        }
  }
  return state;
};


