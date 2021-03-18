import { Component } from "react";
import MainScreen from './screens/main';
import BigImageScreen from './screens/BigImage/BigImage';
import OperaScren from './screens/OperaScreen/OperaScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/BigImage" component={BigImageScreen}>
          </Route>
          <Route path="/OpereSalon" component={OperaScren}>
          </Route>
          <Route exact path="/">
            <MainScreen />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;