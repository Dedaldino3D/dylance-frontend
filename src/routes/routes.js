import Feed from "../components/Feed";
import TopFrelancers from "../components/TopFrelancers";

const Routes = [
  {
    path: "/home",
    exact: true,
    home: () => <aside />,
    main: () => <Feed />,
    sidebar: () => <TopFrelancers />,
  },
];

export default Routes;
