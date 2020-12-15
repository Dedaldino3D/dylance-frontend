import { Provider } from "react-redux";

import store from "../../store";
import DefaultRoutes from "../../routes";
import GlobalStyles from "../Styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <DefaultRoutes />
    </Provider>
  );
}

export default App;
