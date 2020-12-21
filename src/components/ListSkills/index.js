import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { array } from "prop-types";

import { getSkills } from "../../actions/users";
import { getSkills as getSkillsSelector } from "../../selectors/users";
import Loading from "../Loading";

const Container = styled.ul`
  border-radius: 4px;
  box-shadow: var(--bs-ud);
  background: var(--white);
  color: var(--text);

  & > :first-child {
    padding: 10px;
    background: var(--blue-light);
    color: var(--white-100);
  }
  li {
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 600;
  }

  & > li + li {
    border-bottom: 1px solid var(--border);
  }
`;

const ListSkills = ({ skills }) => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getSkills();
  // }, []);

  // useEffect(() => {
  //   if (skills.length > 0) {
  //     setLoading(false);
  //   }
  // }, [skills]);

  return (
    <Container>
      <li>List of Skills</li>
      {loading ? (
        <Loading />
      ) : (
        skills.map((skill, i) => <li key={i}>{skill}</li>)
      )}
    </Container>
  );
};

ListSkills.propTypes = {
  skills: array.isRequired,
};

ListSkills.defaultProps = {
  skills: [
    "Backend Development",
    "Frontend Development",
    "DevOps",
    "Finance & Economy",
    "Java Development",
    "Machine Learning",
    "Reinforcement Learning",
  ],
};

const mapState = (state) => ({
  // skills: getSkillsSelector(state),
});

const mapDispatch = (dispatch) => ({
  // getSkills: () => dispatch(getSkills()),
});

export default connect(mapState, mapDispatch)(ListSkills);
