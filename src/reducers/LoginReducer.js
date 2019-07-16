const initialState = {
  error: 1
};

export const LoginReducer = (state = initialState, action) => {
    console.log(action,'3333333333')
  switch (action.type) {
    case "RESPONSE_ACTION":
        console.log(state,'errorsg');
      if (action.payload.error === 0) {
        return {
          ...state,
          error: 0
        };
      } else
        return {
          ...state,
        };
  }
  return state;
};


