import "./style.css";
import Header from "./header/Header";
import ContentUsers from "./ContentUsers";
import { useState } from "react";
import { connect } from "react-redux";
import {
  getListWithOutMyUserAndMyuser,
  getConvertations,
} from "../../actions/userActions";
import { useEffect } from "react";

function Chat({
  chat,
  authReducers,
  usersReducer,
  getListWithOutMyUserAndMyuser,
  getConvertations,
}) {
  const { user } = authReducers;
  const { users, MyUser } = usersReducer;

  const [borderBottomVisible, setBorderBottomVisible] = useState([
    "visiblesection",
    "invisibleSection",
  ]);

  useEffect(() => {
    getConvertations(MyUser);
  }, [getConvertations, MyUser]);

  useEffect(() => {
    const withOutMyUser = users.filter(
      (otherUser) => otherUser.email !== user.userEmail
    );
    let myUser = users.filter(
      (otherUser) => otherUser.email === user.userEmail
    );
    getListWithOutMyUserAndMyuser(withOutMyUser, myUser[0]);
  }, [user.userEmail, users, getListWithOutMyUserAndMyuser]);
  return (
    <div className="chat">
      <Header chat={chat} MyUser={MyUser} />
      <div className="usersConversations">
        <div className={borderBottomVisible[0]}>Users</div>
        <div className={borderBottomVisible[1]}>Conversations</div>
      </div>
      <ContentUsers setBorderBottomVisible={setBorderBottomVisible} />
    </div>
  );
}
const mapStateToProps = ({ authReducers, usersReducer }) => {
  return { authReducers, usersReducer };
};
const mapDispatchToProps = {
  getListWithOutMyUserAndMyuser,
  getConvertations,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
