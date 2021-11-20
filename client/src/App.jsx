import Home from './Pages/Home';
import Blind from './Pages/Blind';
import Deaf from './Pages/Deaf';
import Dumb from './Pages/Dumb';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

  // const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blind">
          <Blind />
        </Route>
        <Route path="/deaf">
          <Deaf />
        </Route>
        <Route path="/dumb">
          <Dumb />
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;