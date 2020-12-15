import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContainer from "../components/App/MainContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";
import NotFound from "../components/NotFound";

const DefaultRoutes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={MainContainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default DefaultRoutes;
