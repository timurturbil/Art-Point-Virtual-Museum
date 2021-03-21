import { Component, useEffect, useState } from "react";
import InputScreen from './screens/InputScreen/InputScreen';
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
  return (
    <Router>
      <Switch>
        <Route path="/BigImage" component={BigImageScreen}>
        </Route>
        <Route path="/OpereSalon" component={OperaScren}>
        </Route>
        <Route exact path="/">
        <InputScreen/>
        </Route>
      </Switch>
    </Router>

  );

}
