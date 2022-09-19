import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

export default () => {
  return (
    <div>
      <h1>Hello from microfrontend 2</h1>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/anagrafica" component={Button} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
