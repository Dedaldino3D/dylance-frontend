import { connect } from "react-redux";
import styled from "styled-components";

// import { getJobsHistory } from '../../actions/jobs'
// import { getJobsHistory as getJobsHisorySelector } from '../../selectors/jobs'
import Footer from "../Footer";

const Container = styled.ul`
  padding: 10px;

  & > li:first-of-type {
    padding: 10px;
    background: var(--blue-light);
    color: var(--white);
    font-weight: 600;
    border-bottom: none;
  }

  li {
    display: block;
    color: var(--green);
    padding: 6px;
    border-bottom: 1px solid var(--blue-light);
  }
`;

const JobsHistory = (props) => {
  return (
    <>
      <Container>
        <li>Jobs History</li>
        <li>$120 spent in 20 jobs</li>
        <li>130 Jobs posted</li>
        <li>Availability: 30 hrs/week</li>
        <li>15 Jobs in background</li>
      </Container>
      <Footer />
    </>
  );
};

JobsHistory.propTypes = {};

JobsHistory.defaultProps = {};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(JobsHistory);
