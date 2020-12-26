import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
function PrivateRoute(props) {
    console.log('log',props)
    return(
        <Route path={props.path} render={
            ()=> props.setUser ? (props.children): <Redirect to='/'
            
            />
        }/>
    )
}
const mapStateToProps = (reducers) => {
    return reducers.authReducers
}
export default connect(mapStateToProps)(PrivateRoute)