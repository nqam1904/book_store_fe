import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./guard/PrivateRoute";
import { Auth, Client } from "pages";
import "./App.css";
import { NotFound } from "components";
const App = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Auth} />
      <Route path="/" exact component={Client} />
      <PrivateRoute path="/admin" />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
