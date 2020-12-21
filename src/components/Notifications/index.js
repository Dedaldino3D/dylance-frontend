import styled from "styled-components";
import { FaCog } from "react-icons/fa";

const Container = styled.div`
  font-size: 1.4em;
  margin: auto;
  svg {
    font-size: 3em;
    width: 100%;
    animation-name: cogAni;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes cogAni {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
    text-shadow: 1px 1px var(--blue-200);
  }
`;

export default function Messages(props) {
  return (
    <Container>
      <FaCog />
      <p>We are working on it...</p>
    </Container>
  );
}
