import { useState } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";

import Header from "../Header";
import LoadingBar from "../LoadingBar";
import Footer from "../Footer";
import { Container, Content, Info, Button, Main, Aside } from "./styles";
import { Box, Header as BoxHeader } from "../Profile/styles";
import { Tags } from "../Job";
import CreateProposal from "../CreateProposal";

export const ClientInfo = (props) => {
  return <Info></Info>;
};

export const ClientMoreJobs = (props) => {
  return <Info></Info>;
};

export const ButtonSendProposal = (props) => {
  return (
    <Button onClick={() => props.setActive(!props.active)}>
      Send a Proposal
    </Button>
  );
};

const DisplayJob = (props) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <LoadingBar />
      <Header />
      <Container>
        <Main>
          <Box>
            <BoxHeader>
              <h2>Job title</h2>
              <span>Posted 20 minutes ago</span>
            </BoxHeader>
          </Box>
          <Box>
            <Content>
              We are a business in streaming field, we need a programmer not an
              agency to help us building our streaming API with Java Programming
              Language (also using a bit of Go Programming Language), before
              send a proposal you'll be prompted with some questions about the
              project and how you can build it keeping scalability and
              performance in mind.
            </Content>
          </Box>
          <Box style={{ paddingBottom: "40px" }}>
            <BoxHeader style={{ paddingBottom: "40px" }}>
              <h2>Knowledge & Skills</h2>
            </BoxHeader>
            <Tags
              style={{ background: "var(--blue)" }}
              tags={[
                "Java",
                "Python",
                "TDD (Test Driven Development)",
                "UI (User Interface)",
                "UX",
                "C++",
                "Apache Kafka",
                "Apache Zokeeper",
              ]}
            />
          </Box>
          <Box>
            <BoxHeader>
              <h2>Job Activity</h2>
            </BoxHeader>
          </Box>
        </Main>
        <Aside>
          <ButtonSendProposal setActive={setActive} />
          <CreateProposal active={active} setActive={setActive} />
          <ClientInfo />
          <ClientMoreJobs />
          <Footer />
        </Aside>
      </Container>
    </>
  );
};

DisplayJob.propTypes = {
  getJob: func,
};

DisplayJob.defaultProps = {};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(DisplayJob);
