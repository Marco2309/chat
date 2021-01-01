import User from "./User";
import { connect } from "react-redux";

function ContentUsers({WithOutMyUser,setBorderBottomVisible}) {

  const scrollXValue = ()=>{
    const div = document.getElementsByClassName('content--lists')[0]
    const scrollX = div.scrollLeft
    scrollX > 200? setBorderBottomVisible(['invisiblesection', 'visiblesection']): setBorderBottomVisible(['visiblesection', 'invisiblesection'])
  }
  

    return (
    <div className='content--lists' onScroll={scrollXValue}>
      <div className="listUsers">
      {WithOutMyUser.map((user, id) => {
        return <User key={id} user={user} />;
      })}
      </div>
      <div className="listConversations">
          
      </div>
    </div>
    )}
const mapStateToProps = ({usersReducer}) => {
    return usersReducer;
  };
export default connect(mapStateToProps)(ContentUsers);