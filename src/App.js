import { Switch, Route } from "react-router-dom";
import PrivateRoute from "guard/PrivateRoute";
import { Auth, Client, Admin } from "pages";
import "./App.css";
import { NotFound } from "components";
import { ConnectedRouter } from "connected-react-router";
import PropTypes from "prop-types";
import StorageKeys from "constants/Storage-key";
const App = ({ history }) => {
  const isAuthenticated = localStorage.getItem(StorageKeys.TOKEN);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" exact component={Auth} />
        <Route path="/" exact component={Client} />
        <PrivateRoute
          path="/admin"
          component={Admin}
          isAuthenticated={isAuthenticated}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};
App.propTypes = {
  history: PropTypes.object,
};
export default App;
