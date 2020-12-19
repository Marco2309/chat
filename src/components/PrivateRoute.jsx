import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
    return(
        <Route path={props.path} render={
            ()=> props.logged ? (props.children): <Redirect to='/' />
        }/>
    )
}