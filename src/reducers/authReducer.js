const INITIAL_STATE = {
    setUser:true,
    user:{},
    recienRegistrado: false
}

const authReducers = (prevState=INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...prevState,
                recienRegistrado: true
            }
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
                user: action.payload,
                setUser: action.status
            }
        default:
            return prevState;
    }
}

export default authReducers
