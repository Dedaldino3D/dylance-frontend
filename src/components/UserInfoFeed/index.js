import { connect } from "react-redux";
import styled from "styled-components";

import Avatar from "../Avatar";
import ListSkills from "../ListSkills";

const Container = styled.div`
  padding: 10px;

  & > :first-child {
    padding-bottom: 1em;
    text-align: center;

    > span:last-of-type {
      margin: 10px 0;
      font-size: 1em;
      font-weight: 600;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Info = styled.div``;

const UserInfoFeed = (props) => {
  return (
    <Container>
      <Info>
        <Avatar tam={200} />
        <span>Dedaldino A.</span>
      </Info>
      <ListSkills />
    </Container>
  );
};

const mapState = (state) => ({});

export default connect(mapState)(UserInfoFeed);
