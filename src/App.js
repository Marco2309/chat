import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import chat from "./imagenes/chat.svg";
import google from "./imagenes/icon-google.png";
import facebook from "./imagenes/facebook-white.png";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { persistence } from './actions/authActions'
function App({setUser, persistence}) {
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

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login chat={chat} google={google} facebook={facebook} />
        </Route>
        <Route path="/register">
          <Register chat={chat} google={google} facebook={facebook} />
        </Route>
        <PrivateRoute path="/chat">
          <Chat chat={chat} />
        </PrivateRoute>
        <PrivateRoute path="/chat/:id">
          <Chat chat={chat} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}
const mapStateToProps = (reducers) => {
  return reducers.authReducers
}

const mapDispatchToProps = {
  persistence
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
