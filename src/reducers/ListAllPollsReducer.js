

let initialState={
    polls:[],
    poll:[]
}

export const ListAllPollsReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LIST_ALL_POLLS_SUCCESS':
            return{
                ...state,
                polls:action.payload
            }
        case 'VIEW_POLL_SUCCESS':
            return{
                ...state,
                poll:action.payload
            }
    }
    return state
}