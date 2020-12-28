import iconUserdefault from "../../imagenes/iconUserChatAppBold.svg";
function User({ user }) {
  const { firstName, lastName, photoUrl, username } = user;
  const name = firstName + lastName;
  const iconDefault = () => {
    if (photoUrl === "" || photoUrl === "") {
      return iconUserdefault;
    }
    return photoUrl;
  };
  return (
    <div className="content--user">
      <div className="contente--imagen__profile">
        <img src={iconDefault()} alt="" />
      </div>
      <div className="user--names">
        <div className="user--names__username fontBold">{username}</div>
        <div className="user--names__name">{name}</div>
      </div>
    </div>
  );
}
export default User;
