import './styleHeader.css'
import { connect } from "react-redux";
import { logOut } from "../../../actions/authActions";

function DropDown({logOut, setProfile}) {

    const showProfile = ()=> {
        setProfile('profile activate')
    }

    return(
        <div className='dropDown'>
            <div className="dropDowb--item" onClick={showProfile}>
                <p>Profile</p>
            </div>
            <div className='dropDown--item' onClick={logOut}>
                <p>Sign Out</p>
                <i className='icon-exit'/>
            </div>
        </div>
    )
}
export default connect(null, {logOut})(DropDown)