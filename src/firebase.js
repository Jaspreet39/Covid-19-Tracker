import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDdM7fPfUjwpK-ulxrPlihLtBE8uVoUndc",
  authDomain: "covid-19-tracker-bd724.firebaseapp.com",
  projectId: "covid-19-tracker-bd724",
  storageBucket: "covid-19-tracker-bd724.appspot.com",
  messagingSenderId: "963697191707",
  appId: "1:963697191707:web:44762a30d888610d5681be",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
export { auth };
