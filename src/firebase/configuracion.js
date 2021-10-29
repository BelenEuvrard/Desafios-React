import firebase from "firebase/app";
import "firebase/firestore"; 




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApVp7Oeq_bDLNBEc8wf1lVBjrdMtU55P8",
  authDomain: "mi-proyecto-de-react.firebaseapp.com",
  projectId: "mi-proyecto-de-react",
  storageBucket: "mi-proyecto-de-react.appspot.com",
  messagingSenderId: "347024685275",
  appId: "1:347024685275:web:6ab35abf7cf1f87ed2f4fe"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}
