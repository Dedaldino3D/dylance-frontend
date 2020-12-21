import { connect } from "react-redux";
import styled from "styled-components";

import Avatar from "../Avatar";

const Container = styled.div`
  padding: 10px;

  & > :first-child {
    padding-bottom: 1.3em;
    text-align: center;
    > span:last-of-type {
      margin: 14px 0;
      font-size: 1em;
      font-weight: 600;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Info = styled.div``;

const InfoJobs = styled.div`
  color: var(--green);
  margin: 6px;
  span {
    display: block;
    padding: 6px;
    font-size: 13px;
    font-weight: bold;
  }
`;

const UserInfoFeed = (props) => {
  return (
    <Container>
      <Info>
        <Avatar tam={200} />
        <span>Dedaldino A.</span>
      </Info>
      <InfoJobs>
        <span>6 invitations to interview</span>
        <span>10 submited proposal</span>
      </InfoJobs>
    </Container>
  );
};

const mapState = (state) => ({});

export default connect(mapState)(UserInfoFeed);
