import User from "./User";
import ConversationMin from './ConversationMin'
import { connect } from "react-redux";
import React from "react";

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
  const right = ()=> {
    const div = document.getElementsByClassName("content--lists")[0];
    const thisButon = document.getElementById('right')
    const otherButon = document.getElementById('left')
    div.scrollLeft = window.screen.width
    thisButon.style.display = 'none'
    otherButon.style.display = 'block'
    window.scroll(0,0)
  }
  const left = ()=> {
    const div = document.getElementsByClassName("content--lists")[0];
    const thisButon = document.getElementById('left')
    const otherButon = document.getElementById('right')
    div.scrollLeft = 0
    thisButon.style.display = 'none'
    otherButon.style.display = 'block'
  }

  return (
    <div className="content--lists" onScroll={scrollXValue}>
      {/* List users */}
      <div className="listUsers">
        {WithOutMyUser.map((user) => {
          return <User key={user._id} user={user} />;
        })}
        <div id='right' onClick={right}/>
      </div>
      {/* List conversations */}
      <div className="listConversations">
        {myConversation.map((conversation) => {
          return <ConversationMin key={conversation._id} conversation={conversation} MyUser={MyUser}/>;
        })}
        <div id='left' onClick={left}/>
      </div>
    </div>
  );
}
const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};
export default connect(mapStateToProps)(ContentUsers);
