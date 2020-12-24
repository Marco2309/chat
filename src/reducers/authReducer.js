const INITIAL_STATE = {
    setUser:false
}

const authReducers = (prevState=INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...prevState
            }
        case 'LOGIN':
            return {
                ...prevState,
                setUser: true,
                user: action.payload
            }
    
        default:
            return prevState;
    }
}

export default authReducers
