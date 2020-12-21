import { array } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { getTopFrelancers } from "../../actions/users";
import Footer from "../Footer";
import Avatar from "../Avatar";

const Container = styled.div`
  border-radius: 4px;
  box-shadow: var(--bs-ud);
  max-height: 400px;
  overflow-y: scroll;
  background: var(--white-100);
  color: var(--text);

  -webkit-scrollbar {
    width: 10px;
    border-radius: 20px;
    background: var(--black-200);
  }
`;

const Header = styled.h1`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background: var(--blue-light);
  color: var(--white);
  margin: 0 0 10px;
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

const TopFrelancers = ({ users, getTopFrelancers }) => {
  return (
    <>
      <Container>
        <Header>Top Frelancers</Header>
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
