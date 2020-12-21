import Feed from "../components/Feed";
import UserInfoFeed from "../components/UserInfoFeed";
import TopFrelancers from "../components/TopFrelancers";
import Profile from "../components/Profile";
import ProfileInfo from "../components/ProfileInfo";
import JobsHistory from "../components/JobsHistory";
import Messages from "../components/Messages";
import Notifications from "../components/Notifications";

const Routes = [
  {
    path: "/home",
    home: () => <UserInfoFeed />,
    main: () => <Feed />,
    sidebar: () => <TopFrelancers />,
  },
  {
    path: "/profile",
    home: () => <ProfileInfo />,
    main: () => <Profile />,
    sidebar: () => <JobsHistory />,
  },
  {
    path: "/messages",
    home: null,
    main: () => <Messages />,
    sidebar: null,
  },
  {
    path: "/notifications",
    home: null,
    main: () => <Notifications />,
    sidebar: null,
  },
];

export default Routes;
