import "./style.css";
import Header from "./header/Header";
import ContentUsers from "./ContentUsers";
import { useState } from "react";
import { connect } from "react-redux"
import { getListWithOutMyUserAndMyuser  } from "../../actions/userActions";
import { useEffect } from "react";
function Chat({ chat, authReducers, usersReducer, getListWithOutMyUserAndMyuser}) {
  const {user} = authReducers
  const {users} = usersReducer

  const [borderBottomVisible, setBorderBottomVisible] = useState(['visiblesection', 'invisibleSection'])

  useEffect(()=>{
    const withOutMyUser = users.filter(otherUser => otherUser.email !== user.userEmail)
    let myUser = users.filter(otherUser => otherUser.email === user.userEmail)
    getListWithOutMyUserAndMyuser(withOutMyUser, myUser[0])
  },[user.userEmail,users, getListWithOutMyUserAndMyuser ])
  return (
    <div className="chat">
      <Header chat={chat} />
      <div className="usersConversations">
        <div className={borderBottomVisible[0]}>Users</div>
        <div className={borderBottomVisible[1]}>Conversations</div>
      </div>
      <ContentUsers setBorderBottomVisible={setBorderBottomVisible}/>
    </div>
  );
}
const mapStateToProps = ({authReducers, usersReducer})=> {
return {authReducers, usersReducer}
}
export default connect(mapStateToProps,{getListWithOutMyUserAndMyuser})(Chat);
