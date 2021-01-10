import "./styleHeader.css";
import DropDown from "./DropDown";
import iconUserdefault from "../../../imagenes/iconUserChatAppBold.svg";
import { useState } from "react";
import {auth} from '../../../firebase'

export default function Header({ chat, MyUser }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const ShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const [showProfile, setShowProfile] = useState("profile");

  const hideProfile = () => {
    setShowProfile("profile");
  };

  const iconDefault = () => {
    if (MyUser.photoUrl === "" || MyUser.photoUrl === undefined) {
      return iconUserdefault;
    }
    return MyUser.photoUrl;
  };

  const changePass = ()=> {
    auth.sendPasswordResetEmail(MyUser.email).then(function() {
      alert('An email was sent to reset your password, check your inbox')
      // Email sent.
    }).catch(function(error) {
      alert('Ocurrio un error, intentelo mas tarde')
      // An error happened.
    });
  }

  return (
    <div className="header">
      <div className="titleHeader">
        <h2 className="Header--h2">Chat Marc</h2>
        <span>
          <img src={chat} alt="chat icon" className="imgTilte" />
        </span>
      </div>
      <i className="icon-menu" onClick={ShowDropDown}>
        {showDropDown && <DropDown setProfile={setShowProfile} />}
      </i>
      <div className={showProfile}>
        <div className="containerClose">
          <span onClick={hideProfile}>X</span>
        </div>
        {MyUser && (
          <div>
            <div className="presentation">
              <img src={iconDefault()} alt="my  profile" />
              <div className="fontBold">{MyUser.username}</div>
            </div>
            <div>
              <h5>Name</h5>
              <p className='tcenter'>{MyUser.firstName + " " + MyUser.lastName}</p>
              <h5>Email</h5>
              <p className='tcenter'>{MyUser.email}</p>
              <h5>ID</h5>
              <p className='tcenter'>{MyUser._id}</p>
              <div className='tcenter'>
              <input  type="button" value="Change Password" onClick={changePass}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
