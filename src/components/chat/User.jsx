import iconUserdefault from "../../imagenes/iconUserChatAppBold.svg";
import { NavLink } from "react-router-dom";

function User({user}) {

  const { firstName, lastName, photoUrl, username, _id} = user;
  const name = firstName + ' ' + lastName;
  const iconDefault = () => {
    if (photoUrl === "" ||photoUrl === undefined) {
      return iconUserdefault;
    }
    return photoUrl;
  };

  return (
      <NavLink to={`/chat/${_id}`} className="content--user">
        <div className="contente--imagen__profile">
          <img src={iconDefault()} alt="" />
        </div>
        <div className="user--names">
          <div className="user--names__username fontBold">{username}</div>
          <div className="user--names__name">{name}</div>
        </div>
      </NavLink>
  );
}
export default User;
