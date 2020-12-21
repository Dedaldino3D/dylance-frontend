import { useState, useCallback } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";

import {
  Container,
  Header,
  Box,
  Card,
  Portfolio,
  Testmonial,
  TestHeader,
  TestFooter,
  Content,
  ToggleContainer,
  ToggleHeader,
  ButtonShadow,
} from "./styles";
import {
  FaPlus,
  FaUserEdit,
  FaStar,
  FaStarHalf,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

const ToggleComponent = ({ children, title }) => {
  const [toggled, setToggle] = useState(false);
  const toggle = useCallback(() => setToggle(!toggled), [toggled]);

  return (
    <ToggleContainer onClick={toggle}>
      <ToggleHeader>
        <h2>{title}</h2>
        {!toggled ? <FaToggleOff color="var(--green-300)/>" /> : <FaToggleOn />}
      </ToggleHeader>
      {toggled && children}
    </ToggleContainer>
  );
};

ToggleComponent.propTypes = {
  title: string.isRequired,
};

const Stack = (props) => (
  <ToggleComponent title="Skills">
    <p>Working fine</p>
  </ToggleComponent>
);
const Languages = (props) => (
  <ToggleComponent title="Languages">
    <p>Working fine</p>
  </ToggleComponent>
);
const Education = (props) => (
  <ToggleComponent title="Education">
    <p>Working fine</p>
  </ToggleComponent>
);

const ProfilePage = (props) => {
  return (
    <Container>
      <Box>
        <Header>
          <h1>Profile Info</h1>
          <ButtonShadow>
            <FaUserEdit />
          </ButtonShadow>
        </Header>
        <Education></Education>
        <Stack></Stack>
        <Languages></Languages>
      </Box>
      <Box>
        <Header>
          <h1>Portfolio</h1>
          <ButtonShadow>
            <FaPlus />
          </ButtonShadow>
        </Header>
        <Card>
          <Portfolio></Portfolio>
          <Portfolio></Portfolio>
          <Portfolio></Portfolio>
        </Card>
      </Box>
      <Box>
        <Header>
          <h1>Testmonials</h1>
        </Header>
        <Testmonial>
          <TestHeader>
            <h4>
              Build an OS like SCADA, with features described in description
            </h4>
            <span>8 december - present</span>
          </TestHeader>
          <Content>
            <p>
              Congratulations to Dedaldino A., he is working so hard to make
              this project a success, with his knowledge and persistency became
              this project possible
            </p>
          </Content>
          <TestFooter>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </span>
          </TestFooter>
        </Testmonial>
        <Testmonial>
          <TestHeader>
            <h4>
              Build an OS like SCADA, with features described in description
            </h4>
            <span>8 december - present</span>
          </TestHeader>
          <Content>
            <p>
              Congratulations to Dedaldino A., he is working so hard to make
              this project a success, with his knowledge and persistency became
              this project possible
            </p>
          </Content>
          <TestFooter>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </span>
          </TestFooter>
        </Testmonial>
        <Testmonial>
          <TestHeader>
            <h4>
              Build an OS like SCADA, with features described in description
            </h4>
            <span>8 december - present</span>
          </TestHeader>
          <Content>
            <p>
              Congratulations to Dedaldino A., he is working so hard to make
              this project a success, with his knowledge and persistency became
              this project possible
            </p>
          </Content>
          <TestFooter>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </span>
          </TestFooter>
        </Testmonial>
      </Box>
    </Container>
  );
};

ProfilePage.propTypes = {
  name: string,
};

ProfilePage.defaultProps = {
  name: "Dedaldino A.",
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ProfilePage);
