import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
function PrivateRoute(props) {
  return (
    <Route
      path={props.path}
      render={() => ( true ? props.children : <Redirect to="/" />)}
    />
  );
}
const mapStateToProps = (reducers) => reducers.authReducers;

export default connect(mapStateToProps)(PrivateRoute);

//props.setUser