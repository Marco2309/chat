import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
function PrivateRoute(props) {
  return (
    <Route
      path={props.path}
      render={() => ( props.setUser ? props.children : <Redirect to="/" />)}
    />
  );
}
const mapStateToProps = (reducers) => reducers.authReducers;

export default connect(mapStateToProps)(PrivateRoute);

//props.setUser