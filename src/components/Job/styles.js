import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  padding: 10px;
  max-width: 100%;
  max-height: 24em;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 14px;
    color: var(--green);
    font-weight: bold;
  }
`;

export const Content = styled.div`
  font-size: 0.6897em;
  max-width: 100%;
`;

export const Tag = styled.span`
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
  background: var(--blue-bold);
  color: var(--white);
`;
