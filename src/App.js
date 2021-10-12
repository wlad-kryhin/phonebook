import "./index.css";
import AppBar from "./components/AppBar/AppBar";
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import Registration from "./views/Registration";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
export default App;
