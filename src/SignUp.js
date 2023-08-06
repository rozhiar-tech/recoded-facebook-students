import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "./firebase";
import firebase from "firebase";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignUpPage = () => {

const auth = getAuth();
function signInWithGoogle() {

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



const provider = new GoogleAuthProvider();
const [city, setCity] = React.useState("");
const [profile, setProfile] = React.useState("");
return (
  
  <div>

      <h1>Sign Up</h1>

      <br/>
      <br/>
      <br/>
      <br/>
      <Button variant="primary" onClick={signInWithGoogle}>Sign Up with goole</Button>
      <br/>
      <br/>
      
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
        <Form.Label>Profile</Form.Label>
        <Form.Control type="text" placeholder="Enter profile" />
        <br/>
        <Button variant="primary" type="submit">Submit</Button>
      </Form.Group>
      </Form>

  </div>

  );
};

export default SignUpPage;
