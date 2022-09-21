import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Designgraphic from "./DesignGraphic";
import Coding from "./Coding";
import Uiux from "./UIUX";
export default function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact>
              <Home />
            </Route>
            <Route path="/design" component={Designgraphic} exact>
              <Designgraphic />
            </Route>
            <Route path="/coding" component={Coding} exact>
              <Coding />
            </Route>
            <Route path="/uiux" component={Uiux} exact>
              <Uiux />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}
