const INITIAL_STATE_USERS = {
    users : [],
    usersNames: [],
    usersEmails: [],
    WithOutMyUser: [],
    MyUser: {},
    myConversation: [],
    idsMyConversations: [],
    idUsersMyConversations: [],
    charging: false,
    error:''
}

const usersReducer = (state=INITIAL_STATE_USERS, action)=> {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload.users,
                usersNames: action.payload.usersNames,
                usersEmails: action.payload.usersEmails,
                charging: false,
                error: ''
            }
        case 'GET_USER_WITHOUTUSER':
            return{
                ...state,
                WithOutMyUser: action.payload.WithOutMyUser,
                MyUser: action.payload.MyUser,
            }
        case 'GET_CONVERSATIONS':
            return{
                ...state,
                myConversation: action.myConversation,
                idsMyConversations:action.idsMyConversations,
                idUsersMyConversations: action.idUsersMyConversations
            }
    
        default:
            return state;
    }
}

export default usersReducer