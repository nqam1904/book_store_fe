import { Header } from "components";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";

const Home = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  const renderRouter = () => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
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
      {renderRouter(routes)}
    </React.Fragment>
  );
};
export default Home;
