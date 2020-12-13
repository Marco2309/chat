import './App.css';
import { Switch, Route} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
        <Route path='/chat:id'>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
