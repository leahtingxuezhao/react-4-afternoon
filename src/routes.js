import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Math from "./components/Math/Math";
import Bio from "./components/Bio/Bio";
import English from "./components/English/English";
import Student from "./components/Student/Student";

export default (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/english" component={English}></Route>
    <Route path="/bio" component={Bio}></Route>
    <Route path="/math" component={Math}></Route>
    <Route path="/student/:id" component={Student}></Route>
  </Switch>
);
