const initialState = {
    data:[]
  };
  
  export const ListUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIST_USERS_SUCESS":
        return {
            data:[action.payload]
        }
    }
    return state;
  };