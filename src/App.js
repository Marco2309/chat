import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import Conversation from "./components/chat/conversation/Conversation";
import chat from "./imagenes/chat.svg";
import google from "./imagenes/icon-google.png";
import facebook from "./imagenes/facebook-white.png";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { persistence } from './actions/authActions'
import { getUser } from "./actions/userActions";

function App({setUser, persistence, getUser}) {

  let history = useHistory();
const memoPersistence = useCallback(()=>{
  persistence()
},[persistence])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        persistence(user,true)
        history.push("/chat");
      }else{
        persistence([],false)
      }
    });
  }, [history, setUser, memoPersistence, persistence]);

 const getAllUser = useCallback(() => {
  getUser();
 }, [getUser]);

  useEffect(() => {
    getUser();
  }, [getAllUser, getUser]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login chat={chat} google={google} facebook={facebook} />
        </Route>
        <Route path="/register">
          <Register chat={chat} google={google} facebook={facebook} />
        </Route>
        <PrivateRoute path="/chat" exact>
          <Chat chat={chat} />
        </PrivateRoute>
        <PrivateRoute path="/chat/:id">
          <Conversation />
        </PrivateRoute>
      </Switch>
    </div>
  );
}
const mapStateToProps = ({authReducers}) => {
  return authReducers
}

const mapDispatchToProps = {
  persistence,
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
