import React from "react";
import { Route, Switch } from "react-router-dom";

import Feed from "./Pages/Feed";
import Loja from "./Pages/Loja";
import Musicas from "./Pages/Musicas";

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Feed}></Route>
      <Route exact path="/musicas" component={Musicas}></Route>
      <Route exact path="/loja" component={Loja}></Route>
    </Switch>
  );
}

export default Routes;