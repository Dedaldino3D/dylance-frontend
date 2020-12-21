import styled from "styled-components";

export const Container = styled.div`
  margin: 0 -10px;
`;

export const Header = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 2em;
    font-weight: 600;
  }
`;

export const Portfolio = styled.div`
  display: inline-box;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  box-shadow: var(--bs-ud);
  background: var(--white);
`;

export const Box = styled.div`
  border-bottom: 1px solid var(--black-075);
  padding-bottom: 10px;
`;

export const Card = styled.div`
  padding: 10px;
  overflow-x: auto;

  & > div {
    margin-right: 10px;
  }
`;

export const ButtonShadow = styled.button`
  border-radius: 50%;
  padding: 10px;
  border: none;
  width: 35px;
  height: 35px;
  background: var(--white-100);
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  color: var(--white);
  & > svg {
    font-size: 25px !important;
    color: var(--blue-bold);
  }
  &:hover {
    background-color: var(--blue-100);
    transition: all 500ms ease-in-out;
  }
  &:focus {
    opacity: 0.6;
  }
`;

export const Content = styled.div`
  font-size: 12px;
  word-wrap: break-word;
  max-height: 100px;
  overflow-y: hidden;
`;

export const Testmonial = styled.div`
  border-radius: 4px;
  box-shadow: var(--bs-md);
  padding: 10px;
  background: var(--blue-light);
  margin: 10px;
`;

export const TestHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  & > h4 {
    font-size: 1em;
    font-weight: 600;
  }

  & > :last-child {
    font-size: 12px;
    color: var(--black-400);
    width: max-content;
  }
`;

export const TestFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > :last-child {
    align-self: flex-end;
  }
  svg {
    font-size: 15px;
    color: var(--green);
  }
`;

export const ToggleContainer = styled.div`
  padding: 10px;
`;

export const ToggleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--blue-light);

  svg {
    font-size: 25px;
  }
`;
