import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styleConversation.css";
import iconUserdefault from "../../../imagenes/iconUserChatAppBold.svg";
import iconSend from "../../../imagenes/send-beige.svg";
import { connect } from "react-redux";
import { getConvertations } from "../../../actions/userActions";
import HerMessage from "./HerMessage";
import MyMessage from "./MyMessage";

function Conversation({
  idUsersMyConversations,
  MyUser,
  idsMyConversations,
  getConvertations,
}) {
  const [userParameter, setUserParameter] = useState({});
  const [conversations, setConversations] = useState([]);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function userData() {
      let response = await fetch(
        `https://academlo-whats.herokuapp.com/api/v1/users/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
          },
        }
      );
      let result = await response.json();
      setUserParameter(result);
    }
    userData();
  }, [id]);

  const createOrNotConversation = useCallback(async () => {
    console.log("crear o  no conversacion fue llamado");
    if (!idUsersMyConversations.includes(id)) {
      await fetch("https://academlo-whats.herokuapp.com/api/v1/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
        },

        body: JSON.stringify({
          members: [MyUser._id, id],
        }),
      });
      // const result = await response.json();
      getConvertations(MyUser);
    }
  }, [idUsersMyConversations, id, getConvertations, MyUser]);

  useEffect(() => {
    createOrNotConversation();
  }, [createOrNotConversation]);

  const idConversation = useMemo(() => {
    let idConversation;
    idsMyConversations.forEach((element) => {
      if (element[1] === id) {
        idConversation = element[0];
      }
    });
    return idConversation;
  }, [id, idsMyConversations]);

  const eraseConversation = async () => {
    await fetch(
      `https://academlo-whats.herokuapp.com/api/v1/conversations/${idConversation}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ" },
      }
    );
    history.goBack();
  };

  const iconDefault = () => {
    if (userParameter.photoUrl === "" || userParameter.photoUrl === undefined) {
      return iconUserdefault;
    }
    return userParameter.photoUrl;
  };

  /////Pedrir mensajes  aqui el error de xq no carga
  const getMensajes = useCallback(async () => {
    if (idConversation) {
      const response = await fetch(
        `https://academlo-whats.herokuapp.com/api/v1/conversations/${idConversation}/messages`,{
          headers:{
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"}
        }
      );
      const result = await response.json();
      setConversations(result[0].messages);
    }
  }, [idConversation]);
  useEffect(() => {
    getMensajes();
  }, [getMensajes]);

  const senMsg = async () => {
    let respose = await fetch(
      "https://academlo-whats.herokuapp.com/api/v1/messages",
      {
        method: "POST",
        headers: { "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ" },
        body: JSON.stringify({
          userId: MyUser._id,
          conversationId: idConversation,
          message: msg,
          timestamp: Date.now(),
          received: false,
        }),
      }
    );
    let result = await respose.json();
    console.log(result);
    setMsg("");
    getMensajes();
    // getConvertations(MyUser);
  };

  return (
    <div className="conversation">
      {console.log("render")}
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
        <div className="contaierMessage">
          {conversations.map((message) => {
            return (
              <div key={message._id}>
                {message.userId === id ? (
                  <HerMessage message={message} />
                ) : (
                  <MyMessage message={message} />
                )}
              </div>
            );
          })}
        </div>

        <div className="writeMessageContainer">
          <div className="containerInputConversation">
            <input
              value={msg}
              type="text"
              name="convesation"
              className="inputConversation"
              autoComplete="off"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className="sendMessageContainer">
            <img src={iconSend} alt="ico-send" onClick={senMsg} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ usersReducer }) => {
  return usersReducer;
};

export default connect(mapStateToProps, { getConvertations })(Conversation);
