import "./styleLogin.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Login({ chat, google, facebook, signGoogle }) {
  return (
    <>
      <div className="container">
        <img src={chat} alt="icon" className="img-chat" />
        <h1 className="tcenter">Chat Marc</h1>
        <form className="tcenter">
          <fieldset>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="tcenter inputs"
            />
          </fieldset>

          <fieldset>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="tcenter inputs"
            />
          </fieldset>
          <fieldset className="check">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">remember me</label>
          </fieldset>
          <input type="button" value="login" className="login noneOutline" />
        </form>
        <div className="twoColumns">
          <button className="signWithe noneOutline" onClick={signGoogle}>
            <img src={google} alt="icon-google" className="pngGoogle" />
            Sign in Google
          </button>
          <button className="signWithe noneOutline">
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
export default Login;
