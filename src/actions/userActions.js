
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
export const getListWithOutMyUserAndMyuser = (WithOutMyUser,MyUser)=> {
    return {
        type:'GET_USER_WITHOUTUSER',
        payload:{
            WithOutMyUser,
            MyUser
        }
    }
}

export const getConvertations = (id)=> async(dispatch)=> {
    const allConversations = await fetch(baseUrl+'users/1/conversations')
    const allConversationsData = await allConversations.json()
    if(id !== undefined && id._id !== undefined){
        const myConversation = allConversationsData.filter(conversation => conversation.members.includes(id._id))
        dispatch({
            type: 'GET_CONVERSATIONS',
            payload: myConversation
        })
    }
}
