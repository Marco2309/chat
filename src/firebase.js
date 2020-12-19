import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAF0mvQmfXvNGquEOgjpyls9elLzd0YF1s",
    authDomain: "chat-6ff91.firebaseapp.com",
    projectId: "chat-6ff91",
    storageBucket: "chat-6ff91.appspot.com",
    messagingSenderId: "912467688136",
    appId: "1:912467688136:web:4c3b98e89e80fe678b43fd",
    measurementId: "G-T3FS7C2J7T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export default firebase
