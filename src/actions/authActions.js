import firebase, { auth } from "../firebase";
export const register = (payload) => {
  return async (dispatch) => {
    const name =
      payload.firstName + "#$" + payload.lastName + "#$" + payload.username;
    dispatch({ type: "LOADING" });
    try {
      let userObj = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      let user = firebase.auth().currentUser;
      await user.updateProfile({ displayName: name });
      dispatch({
        type:'REGISTER',
        payload:userObj
      })
    } catch (error) {
      dispatch({
        type: "ERROR_REGISTRATION",
        payload: error,
      });
    }
  };
};
