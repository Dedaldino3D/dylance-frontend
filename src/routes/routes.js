import TopFrelancers from "../components/TopFrelancers";

const Routes = [
  {
    path: "/home",
    exact: true,
    home: () => <aside />,
    main: () => <main />,
    sidebar: () => <TopFrelancers />,
  },
];

export default Routes;
