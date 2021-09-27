import { Header } from "components";
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
const Home = () => {
  const renderRouter = () => {
    let result = [];

    if (routes.length > 0) {
      routes.map((route, index) => {
        console.log(route);
        result.push(
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            component={route.component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <React.Fragment>
      <Header />
      {renderRouter()}
    </React.Fragment>
  );
};
export default Home;
