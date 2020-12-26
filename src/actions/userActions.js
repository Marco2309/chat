
const baseUrl = 'https://academlo-whats.herokuapp.com/api/v1/'
export const getUser = ()=> async(dispatch)=> {
    try {
        let usersObj = await fetch(baseUrl+'users')
        let users = await usersObj.json()
        dispatch({
            type:'GET_USERS',
            payload: users
        })
    } catch (error) {
        console.log('getUserErr',error)
    }
}