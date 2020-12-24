import {useState} from 'react'
import "./styleLogin.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
function Login({ chat, google, facebook, signGoogle, login }) {

  const [dataLogin, setDatalogin] = useState({ email: "", password: ""  })

  const hadleInput = (e) => {
    setDatalogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    })
  }

  const signIn = (event, provider)=>{
    event.preventDefault()
    let email = dataLogin.email
    let pass = dataLogin.password
    login(provider, email, pass )
  }
  return (
    <>
      <div className="container">
        <img src={chat} alt="icon" className="img-chat" />
        <h1 className="tcenter">Chat Marc</h1>
        <form className="tcenter" onSubmit={(e)=>signIn(e,'email')}>
          <fieldset>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
            />
          </fieldset>

          <fieldset>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
            />
          </fieldset>
          <fieldset className="check">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">remember me</label>
          </fieldset>
          <input type="submit" value="login" className="login noneOutline" />
        </form>
        <div className="twoColumns">
          <button className="signWithe noneOutline" onClick={(e)=>signIn(e,'google')}>
            <img src={google} alt="icon-google" className="pngGoogle" />
            Sign in Google
          </button>
          <button className="signWithe noneOutline" onClick={(e)=>signIn(e,'facebook')}>
            <img src={facebook} alt="icon-google" className="pngGoogle" />
            Sign in facebook
          </button>
        </div>
        <div className="twoColumns tcenter">
          <Link to="/register" className="block mb10">
            Don't have an account? Sign Up
          </Link>
          <Link to="/register">Forgot password?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
const mapDispatchToProps = {
  login
}
export default connect(null,mapDispatchToProps)(Login);
