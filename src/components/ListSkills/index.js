import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { array } from "prop-types";

import { getSkills } from "../../actions/users";
import { getSkils as getSkillsSelector } from "../../selectors/users";
import Loading from "../Loading";

const Container = styled.ul`
  padding: 10px;
  li {
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  }
  li + li {
    border-bottom: 1px solid var(--border);
  }
`;

const ListSkills = ({ skills }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, []);

  useEffect(() => {
    if (skills.length > 0) {
      setLoading(false);
    }
  }, [skills]);

  return (
    <Container>
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
  skills: getSkillsSelector(state),
});

const mapDispatch = (dispatch) => ({
  getSkills: () => dispatch(getSkills()),
});

export default connect(mapState, mapDispatch)(ListSkills);
