import styled from "styled-components";

const Textarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid var(--border);
  padding: 6px;
  max-height: 250px;
  overflow: auto;
  width: 100%;
  box-shadow: var(--bs-inset);

  :focus {
    border: 1px solid var(--blue-75);
    box-shadow: 0 0 0 4px var(--focus-ring), var(--bs-inset);
    transition: border 0.3s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-trace {
    border-radius: 8px;
    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
  }
`;

export default Textarea;
