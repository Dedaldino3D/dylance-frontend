import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  padding: 10px;
  max-width: 100%;
  background: #525b6bf5;

  & > span:last-of-type {
    font-size: 14px;
  }
  .proposals {
    font-weight: 600;
    font-style: italic;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 16px;
    color: var(--green);
    font-weight: bold;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  padding: 0 0 16px;
  p {
    font-size: 14px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`;
export const Tag = styled.span`
  font-size: 12px;
  border-radius: 20px;
  padding: 4px 10px;
  margin: 4px 2px;
  background: var(--blue-bold);
  color: var(--white);
  width: max-content;
`;

export const PropTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  padding-top: 10px;
  color: var(--blue-100);
`;

export const Info = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  color: var(--blue-200);
  & > span {
    margin-right: 5px;
  }
`;
