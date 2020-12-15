import { Route, Switch } from "react-router-dom";

import Routes from "../../routes/routes";
import Header from "../Header";
import LoadingBar from "../LoadingBar";
import { Container, Aside, SAside, Main } from "./styles";

const MainContainer = (props) => {
  return (
    <>
      <LoadingBar />
      <Header />
      <Container>
        <Aside>
          <Switch>
            {Routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.home}
              />
            ))}
          </Switch>
        </Aside>
        <Main>
          <Switch>
            {Routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Main>
        <SAside>
          <Switch>
            {Routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </Switch>
        </SAside>
      </Container>
    </>
  );
};

export default MainContainer;
