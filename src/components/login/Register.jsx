import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import Footer from "./Footer";
function Register({ chat, google, facebook, register, usersNames, usersEmails }) {
  const [firstDisplay, setFirstDisplay] = useState("");
  const [seconDisplay, setSeconDisplay] = useState("displayNone");
  const [dataRegister, setDataRegister] = useState({ username: "" });

  const [msgUserName, setUserName] = useState(['defaultInputsValidation', ''])
  const [msgFirstName, setFirstName] = useState(['defaultInputsValidation', ''])
  const [msgLastName, setLastName] = useState(['defaultInputsValidation', ''])
  const [msgEmail, setEmail] = useState(['defaultInputsValidation', ''])
  const [msgPass1, setPass1] = useState(['defaultInputsValidation', ''])
  const [msgPass2, setPass2n] = useState(['defaultInputsValidation', ''])

  const changeDisplayNext = () => {
    setFirstDisplay("displayNone");
    setSeconDisplay("");
  };

  const changeDisplayBack = () => {
    setFirstDisplay("");
    setSeconDisplay("displayNone");
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    if(usersNames.includes(dataRegister.username)||dataRegister.firstName === undefined || dataRegister.firstName.length <= 1||usersEmails.includes(dataRegister.email)){
      //Condiciones para entradas no validas
      if(usersNames.includes(dataRegister.username)){
        setUserName(['unvalidEntry', 'This username is not available'])
      }else{setUserName(['defaultInputsValidation', ''])}
      if(dataRegister.firstName === undefined || dataRegister.firstName.length <= 1){
        setFirstName(['unvalidEntry', 'This field must be at least 2 characters long'])
      }else{setFirstName(['defaultInputsValidation', ''])}
      if(usersEmails.includes(dataRegister.email)){
        setEmail(['unvalidEntry', 'este correo ya fue registrado'])
      }else{setEmail(['defaultInputsValidation', ''])}
      changeDisplayBack()
    }else{
      // register(dataRegister);
    }    
  }
  const hadleInput = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <img src={chat} alt="icon" className="img-chat" />
        <h1 className="tcenter">Sign Up</h1>
        <form className="tcenter" onSubmit={handleSubmint}>
          <fieldset className={firstDisplay}>
            <label htmlFor="username" className={msgUserName[0]}>{msgUserName[1]}</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
            />
            <label htmlFor="firstName" className={msgFirstName[0]}>{msgFirstName[1]}</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your name"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your lastName"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
            />
          </fieldset>
          <fieldset className={seconDisplay}>
          <label htmlFor="email" className={msgEmail[0]}>{msgEmail[1]}</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
              required
            />
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm your password"
              className="tcenter inputs"
              onChange={(e) => hadleInput(e)}
              required
            />
          </fieldset>
          <div className="nextBack">
            <span onClick={changeDisplayBack}>Back</span>
            <span onClick={changeDisplayNext}>Next</span>
          </div>
          <input
            type="submit"
            value="Sign In"
            className={`login noneOutline ${seconDisplay}`}
          />
        </form>
        <div className="twoColumns">
          <button className="signWithe noneOutline">
            <img src={google} alt="icon-google" className="pngGoogle" />
            Sign in Google
          </button>
          <button className="signWithe noneOutline">
            <img src={facebook} alt="icon-google" className="pngGoogle" />
            Sign in facebook
          </button>
        </div>
        <div className="twoColumns tcenter">
          <Link to="/">Already have an account? Sign in</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
const mapDispatchToProps = {
  register
};

const mapStateToProps = ({usersReducer}) => {
  return usersReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
