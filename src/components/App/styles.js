import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;

  @media (min-width: 1040px) {
    & > aside {
      display: block;
    }
  }

  @media (min-width: 648px) {
    flex-flow: row nowrap;
    max-width: 1145px;

    & > aside:first-of-type {
      display: block;
    }
  }
`;

export const Main = styled.main`
  flex: 6 2 auto;
  padding: 60px 10px 20px;
  max-width: 600px;
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
`;

export const Aside = styled(aside)`
  flex: 3 5 auto;
  max-width: 400px;
  min-width: 250px;
  align-content: flex-end;
`;

export const SAside = styled(aside)`
  flex: 2 1 200px;
  max-width: 250px;
  min-width: 250px;

  & > div + div {
    margin-top: 2em;
  }
`;

export default Container;
