import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { bool } from "prop-types";

export const Shadow = styled.span`
  border-radius: 50%;
  padding: 5px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  &:hover {
    background-color: var(--blue-100);
    transition: all 500ms ease-in-out;
  }
  &:focus {
    opacity: 0.6;
  }
`;

const Container = styled.button`
  border-radius: 50%;
  padding: 10px;
  border: none;
  width: 35px;
  height: 35px;
  background: transparent;
  color: var(--blue-600);
  display: flex;
  align-items: center;
  & > svg {
    font-size: 16px;
  }
`;

function ButtonSave(props) {
  const [saved, setSaved] = useState(false);
  return (
    <Shadow onClick={() => setSaved(!saved)}>
      <Container>{saved ? <FaBookmark /> : <FaRegBookmark />}</Container>
    </Shadow>
  );
}

ButtonSave.propTypes = {
  saved: bool,
};

ButtonSave.defaultProps = {
  saved: false,
};

const mapDispatch = (dispatch) => ({});

export default connect(null, mapDispatch)(ButtonSave);
