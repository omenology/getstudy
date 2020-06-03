import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((prop, index) => (
          <Route key={index} path={prop.path} exact component={prop.component} />
        ))}

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
