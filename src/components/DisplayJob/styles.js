import styled from "styled-components";

export const Content = styled.p`
  padding: 40px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;

  @media (min-width: 648px) {
    flex-flow: row nowrap;
    max-width: 1024px;
  }
`;

export const Main = styled.main`
  flex: 6 2 auto;
  padding: 60px 10px 20px;
  max-width: 800px;
  border-left: 0.5px solid var(--blue-light);
  border-right: 0.5px solid var(--blue-light);
`;

const aside = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 60px 0.4em 0;
  display: none;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Aside = styled(aside)`
  flex: 2 1 200px;
  max-width: 250px;
  min-width: 250px;

  & > div + div {
    margin-top: 2em;
  }
`;
export const Info = styled.div``;

export const Button = styled.button`
  padding: 6px 16px;
  border: none;
  color: var(--white);
  background: var(--blue-300);
  font-size: 14px;
  border-radius: 4px;
`;
