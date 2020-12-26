import './styleHeader.css'
import { connect } from "react-redux";
import { logOut } from "../../../actions/authActions";

function DropDown({logOut}) {
    return(
        <div className='dropDown'>
            <div className='signOut' onClick={logOut}>
                <p>Sign Out</p>
                <i className='icon-exit'/>
            </div>
        </div>
    )
}
export default connect(null, {logOut})(DropDown)