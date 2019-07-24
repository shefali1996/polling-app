let initialState = {
  polls: [],
  poll: [],
  addOptionData: {},
  deleteOptionData: {},
  updateTitleData:{},
  addPollData:{}
};

export const ListAllPollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ALL_POLLS_SUCCESS":
      return {
        ...state,
        polls: action.payload
      };
    case "VIEW_POLL_SUCCESS":
      return {
        ...state,
        poll: action.payload
      };
    case "ADD_OPTION_SUCCESS":
      return {
        ...state,
        addOptionData: action.payload.error
      };
    case "DELETE_OPTION_SUCCESS":
      return {
        ...state,
        deleteOptionData:action.payload.error
      };
      case "UPDATE_TITLE_SUCCESS":
      return {
        ...state,
        updateTitleData:action.payload.error
      };
      case "ADD_POLL_SUCCESS":
      return {
        ...state,
        addPollData:{...action.payload}
      };
  }
  return state;
};
