const INITIAL_STATE_USERS = {
    users : [],
    charging: false,
    error:''
}

const usersReducer = (state=INITIAL_STATE_USERS, action)=> {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                charging: false,
                error: ''
            }
    
        default:
            return state;
    }
}

export default usersReducer