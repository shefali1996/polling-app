const initialState = {
  error: 1,
  loginStatus:false
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
        case 'LOGIN_STATUS':
            if(action.payload){
              return{
                ...state,
                loginStatus:true,
              }
            }
            else{
              return{
                ...state,
              }
            }
  }
  return state;
};


