import styled, { css } from "styled-components";
import { string, func, bool } from "prop-types";
import { FaTimes } from "react-icons/fa";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: visible;
  padding: 100px 10px 10px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: ${(props) =>
    props.name === "rc" ? "animate-rc" : "animate-tc"};
  animation-duration: ${(props) => props.duration || "1s"};
  animation-timing-function: ${(props) => props.timeFunc || "ease"};

  & > div:first-child {
    position: relative;
    margin: auto;
    width: 95%;
    max-width: 600px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    flex-flow: column nowrap;
  }

  ${(props) =>
    props.name === "rc" &&
    css`
      @keyframes animate-rc {
        from {
          transform: translateX(50%);
        }
        to {
          transform: trnaslateX(0%);
        }
      }
    `}

  ${(props) =>
    props.name === "tc" &&
    css`
      @keyframes animate-tc {
        from {
          transform: translateY(50%);
        }
        to {
          transform: translateY(0%);
        }
      }
    `}
`;

const ModalContainer = styled.div`
  border-radius: 4px;
  position: absolute;
  border: 1px solid var(--border);
  z-index: 1080;
  overflow: auto;
  max-width: 600px;
  margin: auto;
  background: var(--white-100);
  color: var(--text);
  @media screen (max-width: 540px) {
    margin: 10px;
  }
`;

const ModalHeader = styled.div`
  padding: 0.8em;
  font-size: 16px;
  width: 100%;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.text &&
    css`
      border-bottom: 1px solid var(--border);
    `}
`;

const ModalBody = styled.div`
  padding: 0.8em;
  font-size: 12px;
  width: 100%;
`;

const ModalFooter = styled.div`
  border-top: 1px solid var(--border);
  padding: 8px;
  width: 100%;
`;

const CloseModal = styled.span`
  svg {
    font-size: 22px;
  }
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
  :focus {
    color: var(--gray-60);
  }
  align-self: flex-end;
  margin: 0 0 0 auto;
`;

const Modal = ({ active, text, close, animationType, footer, children }) => {
  if (!active) {
    return null;
  }

  return (
    <Container name={animationType || "rc"}>
      <ModalContainer>
        <ModalHeader text={text}>
          {text && <h3>{text}</h3>}
          <CloseModal onClick={close}>
            <FaTimes />
          </CloseModal>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Container>
  );
};

Modal.propTypes = {
  text: string,
  close: func,
  success: func,
  active: bool,
};

export default Modal;
