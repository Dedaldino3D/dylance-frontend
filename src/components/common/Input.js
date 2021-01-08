import styled, { css } from "styled-components";
import { func, string, oneOf, number } from "prop-types";

const InputContainer = styled.input`
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 30px 8px 12px;
  margin-bottom: 0.425em;
  width: 100%;
  flex: 1 1 baseline;
  box-shadow: var(--bs-inset);

  :focus {
    border: 1px solid var(--blue-75);
    box-shadow: 0 0 0 4px var(--focus-ring), var(--bs-inset);
    transition: border 0.3s ease-in-out;
  }

  &[name="search"] {
    background-color: var(--white);
    padding: 6px 10px;
    border-radius: 20px !important;
    transition: width 0.6s ease-in-out;
    margin: 0;

    ::placeholder {
      font-size: 14px;
    }
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 40px;
    `}
`;
export const Input = (props) => <InputContainer {...props} />;

Input.propTypes = {
  onChange: func,
  onClick: func,
  name: string,
  className: string,
  id: string,
  placeholder: string,
  value: oneOf([string, number]),
};

export default Input;
