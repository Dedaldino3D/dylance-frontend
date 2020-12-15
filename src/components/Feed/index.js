import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getJobs } from "../../actions/jobs";
import { getJobs as getJobsSelector } from "../../selectors/jobs";
import Loading from "../Loading";
import Job from "../Job";

const Container = styled.div`
  padding: 10px;
`;

const Feed = ({ getJobs, jobs }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  useEffect(() => {
    if (jobs.length > 0) {
      setLoading(false);
    }
  }, [jobs]);

  return (
    <Container>{loading ? <Loading /> : <RenderJobs jobs={jobs} />}</Container>
  );
};

const RenderJobs = ({ jobs }) => {
  return jobs.map((job) => <Job key={job.id} job={job} />);
};

const mapState = (state) => ({
  jobs: getJobsSelector(state),
});

const mapDispatch = (dispatch) => ({
  getJobs: () => dispatch(getJobs()),
});

export default connect(mapState, mapDispatch)(Feed);
