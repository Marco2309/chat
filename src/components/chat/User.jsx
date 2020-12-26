function User({ user }) {
  const { firstName, lastName, email, photoUrl, username } = user;
  return (
    <div className='content--user'>
      <div className='contente--imagen__profile'>
        <img src={photoUrl} alt="" />
      </div>
      <span>{username}</span>
    </div>
  );
}
export default User;
