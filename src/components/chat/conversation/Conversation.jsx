import "./styleConversation.css";
import iconUserdefault from "../../../imagenes/iconUserChatAppBold.svg";
import iconSend from "../../../imagenes/send-beige.svg";

function Conversation() {
  const iconDefault = (photoUrl = undefined) => {
    if (photoUrl === "" || photoUrl === undefined) {
      return iconUserdefault;
    }
    return photoUrl;
  };
  return (
    <div className="conversation">
      <div className="headerConversation">
        <div className="containerIcons">
          <i className="arrow-left icon"></i>
        </div>
        <div className="containerNameAndPhoto">
          <div className="conversationIconContainer">
            <img
              src={iconDefault()}
              alt="phto user"
              className="conversationIcon"
            />
          </div>
          <div className="">Name</div>
        </div>
        <div className="containerIcons">
          <i className="trash icon"></i>
        </div>
      </div>
      <div className="conversation--container">
        <div className="writeMessageContainer">
          <div className='containerInputConversation'>
            <input
              type="text"
              name="convesation"
              className="inputConversation"
            />
            <div>

            </div>
          </div>
          <div className="sendMessageContainer">
            <img src={iconSend} alt="ico-send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
