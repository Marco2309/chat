import React from "react";
function HerMessage({message}) {
  return (
    <div className="containerHerMessage">
      <div className="HerMessage">
        {message.message}
      </div>
    </div>
  );
}
export default HerMessage;
