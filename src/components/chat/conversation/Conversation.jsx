import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styleConversation.css";
import iconUserdefault from "../../../imagenes/iconUserChatAppBold.svg";
import iconSend from "../../../imagenes/send-beige.svg";
import { connect } from "react-redux";

function Conversation({ idUsersMyConversations, MyUser, idsMyConversations }) {
  const [userParameter, setUserParameter] = useState({});
  const { id } = useParams();
  const history = useHistory();

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

  useEffect(() => {
    const createOrNotConversation = async () => {
      if (!idUsersMyConversations.includes(id)) {
        await fetch(
          "https://academlo-whats.herokuapp.com/api/v1/conversations",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              members: [MyUser._id, id],
            }),
          }
        );
        // const result = await response.json();
      }
    };
    createOrNotConversation();
  }, [MyUser._id, id, idUsersMyConversations]);

  const eraseConversation = async () => {
    let idConversation;
    idsMyConversations.forEach((element) => {
      if (element[1] === id) {
        idConversation = element[0];
      }
    });
    const response = await fetch(
      `https://academlo-whats.herokuapp.com/api/v1/conversations/${idConversation}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    );
    const result = await response.json()
    console.log(result)
    history.goBack()
  };

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
        <div className="containerIcons" onClick={eraseConversation}>
          <i className="trash icon"></i>
        </div>
      </div>
      <div className="conversation--container">
        <div>hola</div>
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

const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};

export default connect(mapStateToProps)(Conversation);
