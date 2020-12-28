
const baseUrl = 'https://academlo-whats.herokuapp.com/api/v1/'
export const getUser = ()=> async(dispatch)=> {
    try {
        let usersObj = await fetch(baseUrl+'users')
        let users = await usersObj.json()
        let usersNames = []
        let usersEmails = []
        users.map(user=>{
            usersNames.push(user.username)
            usersEmails.push(user.email)
            return 1
          })
        dispatch({
            type:'GET_USERS',
            payload: {users, usersNames, usersEmails}
        })
    } catch (error) {
        console.log('getUserErr',error)
    }
}