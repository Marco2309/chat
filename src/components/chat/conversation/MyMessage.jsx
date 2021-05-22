import React from "react";
function MyMessage({message}) {
  return (
    <div className="containerMyMessage">
      <div className='MyMessage'>
      {message.message}
      </div>
    </div>
  );
}
export default MyMessage;
