import { Header } from "components";
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        {routes.map(({ component: Component, path, exact }) => (
          <Route path={`/${path}`} key={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Switch>
    </React.Fragment>
  );
};
export default Home;
