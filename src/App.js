import { Component, useEffect, useState } from "react";
import InputScreen from './screens/InputScreen/InputScreen';
import MainScreen from './screens/main';
import BigImageScreen from './screens/BigImage/BigImage';
import OperaScren from './screens/OperaScreen/OperaScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import fire from './firebase/fire';
import LoginScreen from './screens/LoginScreen/LoginScreen';
export default function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userName, setUserName] = useState("");



  /* const selector = useSelector((state) => state.form); */
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }
  const handleLogout = () => {
    fire.auth().signOut();
  }
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser("")
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/BigImage" component={BigImageScreen}>
        </Route>
        <Route path="/OpereSalon" component={OperaScren}>
        </Route>
        <Route exact path="/">
     {/*    <InputScreen LogOut={handleLogout}/> */}
          {user
            ? <MainScreen LogOut={handleLogout} UserName={userName}/>
            : <LoginScreen email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              emailError={emailError}
              passwordError={passwordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              setUserName={setUserName} />}
        </Route>
      </Switch>
    </Router>

  );

}