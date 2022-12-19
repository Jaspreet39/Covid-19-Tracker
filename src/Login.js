import React,{useState} from "react";
import firebase from 'firebase'
import { auth } from "./firebase";
// import { getAuth } from "firebase/auth"


// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

function Login() {
    const [number,setNumber] = useState(" ")
    const auth = getAuth();
    auth.languageCode = 'it';

    const verifyPhoneNumber = () => {
        const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        const phoneNumber =` +91${number}`;
        auth.signInWithPhoneNumber(phoneNumber, recaptcha).then(async (e) =>
            setCallback(e)
        ).catch((err) => console.log(err))
    }
    const verify = () => {
        const email = userData.email;
        if (password.length > 0 && code.length >= 6) {
            callback.confirm(code).then((user) => {
                auth.signInWithEmailAndPassword(email, password).then(() => {
                    users.doc(email).set({ phoneNoVerified: true }, { merge: true })
                        
                })
            }).catch((err) => console.log(err))
        } 
    }
   
  return (
    <div className="login">
      <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" />
      <button onClick={verifyPhoneNumber}>Get Otp</button>
      <button onClick={verify}>Verify</button>
      <Recaptcha id="recaptcha-container"></Recaptcha>
    </div>
  );
}

export default Login;
