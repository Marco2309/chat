import User from "./User";
import ConversationMin from './ConversationMin'
import { connect } from "react-redux";

function ContentUsers({
  WithOutMyUser,
  setBorderBottomVisible,
  myConversation,
  MyUser
}) {
  const scrollXValue = () => {
    const div = document.getElementsByClassName("content--lists")[0];
    const scrollX = div.scrollLeft;
    scrollX > window.screen.width / 2
      ? setBorderBottomVisible(["invisiblesection", "visiblesection"])
      : setBorderBottomVisible(["visiblesection", "invisiblesection"]);
  };

  return (
    <div className="content--lists" onScroll={scrollXValue}>
      {/* List users */}
      <div className="listUsers">
        {WithOutMyUser.map((user) => {
          return <User key={user._id} user={user} />;
        })}
      </div>
      {/* List conversations */}
      <div className="listConversations">
        {myConversation.map((conversation) => {
          return <ConversationMin key={conversation._id} conversation={conversation} MyUser={MyUser}/>;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};
export default connect(mapStateToProps)(ContentUsers);
