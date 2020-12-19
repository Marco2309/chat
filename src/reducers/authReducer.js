const INITIAL_STATE = {
    setUser:false
}

const authReducers = (prevState=INITIAL_STATE, action)=> {
    switch (action.type) {
        // case SET_USER:
        //             return {
        //                 ...prevState,
        //                 user: action.userObj  
        //             }
    
        default:
            return prevState;
    }
}

export default authReducers
