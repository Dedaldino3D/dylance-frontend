import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 999;
  min-height: 50px;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  box-shadow: var(--bs-gl);
  background: var(--blue-bolder);
  color: var(--white);
  width: 100%;

  .links {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    max-width: 300px;
    align-self: center;
    margin-left: 2px;
    overflow-y: hidden;
  }

  .active-header_link {
    background: var(--blue-light);
    transition: all 0.4s ease-in-out;
    color: var(--white) !important;
  }

  a {
    padding: 1.1em 0.1em;
    flex: 1 1 auto;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }

  svg {
    font-size: 1.4em !important;
    margin-right: 4px;
    color: var(--blue-900);
  }
  svg,
  .links a div {
    margin: auto;
    text-align: center;
  }
`;

export default Container;
