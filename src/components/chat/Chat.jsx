import "./style.css";
import Header from "./header/Header";
import { connect } from "react-redux";
import User from "./User";
function Chat({ chat, users }) {

  return (
    <div className="chat">
      <Header chat={chat} />
      <div className="usersConversations">
        <div className="sectionVisible">Users</div>
        <div className="">Conversations</div>
      </div>
      {users.map((user, id) => {
        return <User key={id} user={user} />;
      })}
    </div>
  );
}
const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};
export default connect(mapStateToProps)(Chat);
