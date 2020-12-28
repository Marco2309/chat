const INITIAL_STATE = {
    setUser:true,
    user:{}
}

const authReducers = (prevState=INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'REGISTER':
            return prevState
        case 'LOGIN':
            return {
                ...prevState,
                setUser: true,
                user: action.payload
            }
        case 'LOG_OUT':
            return {
                ...prevState,
                setUser: false,
                user:{}
            }
        case 'PERSISTENCE':
            return {
                ...prevState,
                user: action.payload.user,
                setUser: action.payload.status
            }
        default:
            return prevState;
    }
}

export default authReducers
