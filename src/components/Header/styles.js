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
  background: var(--blue-link);
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
    background: var(--blue-900);
    transition: all 0.4s ease-in-out;
    svg {
      color: var(--white) !important;
    }
  }

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.1em 0.1em;
    flex: 1 1 auto;
    margin: -4px;
    margin-right: 2px;
  }

  svg {
    font-size: 1.4em !important;
    margin-right: 4px;
    color: var(--blue-900);
  }
  svg,
  .links a div {
    margin: auto;
  }
`;

export default Container;
