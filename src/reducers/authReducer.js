const INITIAL_STATE = {
    setUser:false
}

const authReducers = (prevState=INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'CATCH_REGISTER':
            return {
                ...prevState,
                user: action.userObj  
            }
    
        default:
            return prevState;
    }
}

export default authReducers
