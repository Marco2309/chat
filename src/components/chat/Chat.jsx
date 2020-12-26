import './style.css'
import Header from './header/Header'
import { connect } from "react-redux";
import { getUser } from "../../actions/userActions";
import { useCallback, useEffect } from "react";
import User from "./User";
function Chat({chat, getUser, users}) {
    const getAllUser = useCallback(()=>{
        getUser()
    },[getUser])

    useEffect(()=>{
        getUser()
    },[getAllUser, getUser])
    

    return(
        <div className='chat'>
        <Header chat={chat}/>
        {console.log(users)}
        {
            users.map((user, id)=>{
               return (<User key={id} user={user} />)
            })
        }
        </div>
    )
}
const mapStateToProps = (reducers)=>{
    return reducers.usersReducer
}
const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Chat)