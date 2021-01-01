import firebase, { auth } from "../firebase";
//Register
export const register = (payload) => {
  return async (dispatch) => {
    const name = payload.firstName + " " + payload.lastName;
    dispatch({ type: "LOADING" });
    try {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
      let user = firebase.auth().currentUser;
      await user.updateProfile({ displayName: name });

      let response = await fetch(
        "https://academlo-whats.herokuapp.com/api/v1/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            uid: user.uid,
            username: payload.username,
            photoUrl: "",
          }),
        }
      );
      await response.json();
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
  return async (dispatch, getState) => {
    const { usersNames, usersEmails } = getState().usersReducer;
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
        if(usersEmails.includes(user.email)){
          dispatch({
            type: "LOGIN",
            payload: {
              userName: user.displayName,
              userEmail: user.email,
              userPhotoURL: user.photoURL,
              userUID: user.uid
            },
          })
        }else{
          let username = user.uid
          usersNames.includes(user.displayName) ? username = user.uid : username = user.displayName

          let response = await fetch(
            "https://academlo-whats.herokuapp.com/api/v1/users",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName: user.displayName,
                lastName: '',
                email: user.email,
                uid: user.uid,
                username: username,
                photoUrl: user.photoURL,
              }),
            }
          );
          await response.json();


        }
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
export const persistence = (user, status) => {
  const {displayName,email,photoURL} = user
  return {
    type: "PERSISTENCE",
    payload: {
      userName: displayName,
      userEmail: email,
      userPhotoURL: photoURL
    },
    status: status,
  }
};
