import { connect } from "react-redux";
import styled from "styled-components";

import { getTopFrelancers } from "../../actions/users";
import Avatar from "../Avatar";

const Container = styled.div`
  border-radius: 8px;
  box-shadow: var(--bs-ud);
  max-height: 400px;
  overflow-y: scroll;
`;

const Header = styled.h1`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background: var(--blue-link);
  color: var(--white);
`;

const User = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  max-height: 100px;
  &:last-child {
    span {
      display: block;
      margin-bottom: 5px;
    }
    & :first-child {
      font-size: 14px;
      font-weight: 600;
    }
    & :last-child {
      font-size: 12px;
      font-style: italic;
    }
  }
`;

const TopFrelancers = ({ users }) => {
  return (
    <Container>
      <Header>Top Frelancers</Header>
      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <Avatar />
            <div>
              <span>Dedadino A.</span>
              <span>Software Engineer</span>
            </div>
          </User>
        ))}
      </ul>
    </Container>
  );
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
