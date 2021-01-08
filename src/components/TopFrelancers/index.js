import { array } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { getTopFrelancers } from "../../actions/users";
import Footer from "../Footer";
import Avatar from "../Avatar";

const Container = styled.div`
  border-radius: 4px;
  box-shadow: var(--bs-ud);
  background: var(--white-100);
  color: var(--text);
`;

const Header = styled.h1`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background: var(--blue-light);
  color: var(--white);
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const User = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  max-height: 100px;
  & > :last-child {
    margin-left: 10px;
    & > span {
      display: block;
      margin-bottom: 5px;
    }
    & > :first-child {
      font-size: 14px;
      font-weight: 600;
    }
    & > :last-child {
      font-size: 12px;
      font-style: italic;
    }
  }
`;

const Users = styled.div`
  max-height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    background: var(--black-200);
    cursor: pointer;
  }

  ::-webkit-scrollbar-trace,
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;

const TopFrelancers = ({ users, getTopFrelancers }) => {
  return (
    <>
      <Container>
        <Header>Top Frelancers</Header>
        <Users>
          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <Avatar tam={30} />
                <div>
                  <span>{user.name}</span>
                  <span>{user.profission}</span>
                </div>
              </User>
            ))}
          </ul>
        </Users>
      </Container>
      <Footer />
    </>
  );
};

TopFrelancers.propTypes = {
  users: array,
};

TopFrelancers.defaultProps = {
  users: [
    {
      id: "12d232fdd-fdf32",
      name: "Dedaldino A.",
      profission: "Software Engineer",
    },
    { id: "232fdd-fdf32", name: "Kright P.", profission: "Frontend Developer" },
    { id: "12d2dsfdd-fdf32", name: "Sabrina L.", profission: "Designer" },
    {
      id: "1643vsfdd-fdf32",
      name: "Micaela G.",
      profission: "DevOps Engineer",
    },
    {
      id: "fd34-3fdd-fdf32",
      name: "Fabricia W.",
      profission: "Economist",
    },
    {
      id: "16565dd-fdf32",
      name: "Ubiquos U.",
      profission: "Project Management",
    },
    {
      id: "767644-fdf32",
      name: "Quiue S.",
      profission: "Mobile Developer",
    },
  ],
};
const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  getTopFrelancers: () => dispatch(getTopFrelancers()),
});

export default connect(mapState, mapDispatch)(TopFrelancers);
