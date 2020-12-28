import firebase, { auth } from "../firebase";
//Register
export const register = (payload) => {
  return async (dispatch) => {
    const name =
      payload.firstName + " " + payload.lastName;
    dispatch({ type: "LOADING" });
    try {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      let user = firebase.auth().currentUser;
      await user.updateProfile({ displayName: name });
      dispatch({
        type: "REGISTER",
      });
    } catch (error) {
      dispatch({
        type: "ERROR_REGISTRATION",
        payload: error,
      });
    }
  };
};

//Login
export const login = (provider, email, password) => {
  return async (dispatch) => {
    try {
      if (provider === "email") {
        let { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      } else if (provider === "google") {
        let googleProvider = new firebase.auth.GoogleAuthProvider();
        let { user } = await auth.signInWithPopup(googleProvider);
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      } else if (provider === "facebook") {
        let facebookProvider = new firebase.auth.FacebookAuthProvider();
        let { user } = await auth.signInWithPopup(facebookProvider);
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      } else {
        console.log("impossible");
      }
    } catch (error) {
      console.log("ocurrio error", error);
    }
  };
};

//Log out
export const logOut = () => (dispatch) => {
  auth
    .signOut()
    .then(
      dispatch({
        type: "LOG_OUT",
      })
    )
    .catch((error) => console.log("logOut", error));
};

//persistance
export const persistence = (user,status) => (dispatch) => {
  dispatch({
    type: "PERSISTENCE",
    payload: {
      user:user,
      status:status
    },
  });
};
