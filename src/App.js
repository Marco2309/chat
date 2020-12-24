import './App.css';
import { Switch, Route, useHistory} from "react-router-dom";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import chat from './imagenes/chat.svg'
import google from "./imagenes/icon-google.png"
import facebook from "./imagenes/facebook-white.png"
import PrivateRoute from "./components/PrivateRoute";
import {auth} from './firebase'
import {useEffect, useState} from 'react'

function App() {

  let [user, setUser] = useState({}) 
  let [isLogged, setIsLogged] = useState(true)
  let history = useHistory()

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        console.log('app',user)
        setUser(user)
        setIsLogged(true)
        history.push('/chat')
      }else{
        setIsLogged(false)
        setUser({})
      }
    })
  },[history])

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
        {!isLogged && <Login 
          chat={chat} 
          google={google} 
          facebook={facebook}
           />
           }
        </Route>
        <Route path='/register'>
          <Register chat={chat} google={google} facebook={facebook} />
        </Route>
        <PrivateRoute path='/chat' logged={isLogged} user={user}>
          <Chat chat={chat} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
