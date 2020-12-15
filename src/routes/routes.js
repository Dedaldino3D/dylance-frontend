import Feed from "../components/Feed";
import UserInfoFeed from "../components/UserInfoFeed";
import TopFrelancers from "../components/TopFrelancers";

const Routes = [
  {
    path: "/home",
    exact: true,
    home: () => <UserInfoFeed />,
    main: () => <Feed />,
    sidebar: () => <TopFrelancers />,
  },
];

export default Routes;
