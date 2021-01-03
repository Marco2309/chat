import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styleConversation.css";
import iconUserdefault from "../../../imagenes/iconUserChatAppBold.svg";
import iconSend from "../../../imagenes/send-beige.svg";

function Conversation() {
  
  const [userParameter, setUserParameter] = useState({});
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    async function userData() {
      let response = await fetch(
        `https://academlo-whats.herokuapp.com/api/v1/users/${id}`
      );
      let result = await response.json();
      setUserParameter(result);
    }
    userData();
  }, [id]);


  const iconDefault = () => {
    if (userParameter.photoUrl === "" || userParameter.photoUrl === undefined) {
      return iconUserdefault;
    }
    return userParameter.photoUrl;
  };
  return (
    <div className="conversation">
      <div className="headerConversation">
        <div className="containerIcons" onClick={history.goBack}>
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
          <div className="">{userParameter.username}</div>
        </div>
        <div className="containerIcons">
          <i className="trash icon"></i>
        </div>
      </div>
      <div className="conversation--container">
        <div className="writeMessageContainer">
          <div className="containerInputConversation">
            <input
              type="text"
              name="convesation"
              className="inputConversation"
            />
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
