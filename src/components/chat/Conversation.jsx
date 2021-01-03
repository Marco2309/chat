import iconUserdefault from "../../imagenes/iconUserChatAppBold.svg";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
function Conversation({ conversation, MyUser, WithOutMyUser }) {
  const userId = () => {
    let user_id;
    if (MyUser._id) {
      MyUser._id !== conversation.members[0]
        ? (user_id = conversation.members[0])
        : (user_id = conversation.members[1]);
    } else console.log("error conversations line 9");
    return user_id;
  };

  const thisUser = WithOutMyUser.filter((user) => user._id === userId());
  const user = thisUser[0];

  const iconDefault = () => {
    if (user.photoUrl === "" || user.photoUrl === undefined) {
      return iconUserdefault;
    }
    return user.photoUrl;
  };

  return (
    <NavLink to={`/chat/${userId()}`} className="content--user">
      <div className="conversations_img">
        <img src={iconDefault()} alt="" />
      </div>
      <div>
        <div className="fontBold">{user.username}</div>
        <div>
          <span>latest message</span>
          <div className="dateAndCheck">
            <span>fecha</span>
            <div className="container-check">
              <i className="check icon"></i>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};
export default connect(mapStateToProps)(Conversation);
