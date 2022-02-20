import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNxOum1pbARzD0SJxb-bDlnyn8tkJi1EU",
    authDomain: "fireblogs-b6a7a.firebaseapp.com",
    projectId: "fireblogs-b6a7a",
    storageBucket: "fireblogs-b6a7a.appspot.com",
    messagingSenderId: "992628980571",
    appId: "1:992628980571:web:4938f95d3e00ed2419f87e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {timestamp}
  export default firebaseApp.firestore()
