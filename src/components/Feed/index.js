import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getJobs } from "../../actions/jobs";
// import { getJobs as getJobsSelector } from "../../selectors/jobs";
import Loading from "../Loading";
import Job from "../Job";

const Container = styled.div`
  & > p:first-of-type {
    font-size: 2em;
    margin-bottom: 1.5em;
  }
  & > div {
    margin-bottom: 15px;
  }
`;

const Feed = ({ getJobs, jobs }) => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getJobs();
  // }, []);

  // useEffect(() => {
  //   if (jobs.length > 0) {
  //     setLoading(false);
  //   }
  // }, [jobs]);

  return (
    <Container>
      <p>Find Work</p>
      {loading ? <Loading /> : <RenderJobs jobs={jobs} />}
    </Container>
  );
};

const RenderJobs = (props) => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return jobs.map((job) => <Job key={job} />);
};

const mapState = (state) => ({
  // jobs: getJobsSelector(state),
});

const mapDispatch = (dispatch) => ({
  getJobs: () => dispatch(getJobs()),
});

export default connect(mapState, mapDispatch)(Feed);
