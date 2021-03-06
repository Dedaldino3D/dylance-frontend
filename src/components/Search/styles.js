import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 600px;
  height: 100%;
  padding: 2px;
  flex: 1 1 auto;
  display: flex;

  @media (max-width: 780px) {
    max-width: 100%;
    width: 100%;
    padding: 0 10px;
    background-color: var(--blue-bolder);
    top: 100%;
    position: absolute;
    display: flex;
    align-items: center;

    & > form {
      .search_icon-form {
        cursor: pointer;
      }
    }
  }
`;

export const FormSearch = styled.form`
  color: var(--text);
  font-size: 16px !important;
  width: 100%;
  position: relative;
`;

export const ResultContainer = styled.div`
  display: flex;
  font-size: 13px;
  position: absolute;
  top: 100%;
  z-index: 1000;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
  overflow-y: scroll;
  background-color: var(--white);
  margin-top: 6px;
  border-radius: 8px !important;
  border: none;
  box-shadow: var(--bs-gl);

  ::-webkit-scrollbar {
    width: 12px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-trace,
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  @media (max-width: 780px) {
    max-width: 450px;
  }
`;

export const IconSearch = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  white-space: nowrap;
  position: relative;
  color: var(--black-800);
  background-color: var(--black-100);
`;

export const List = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: flex-start;

  & + div {
    border-top: 1px solid var(--black-050);
  }
`;

export const NoFound = styled.span`
  color: var(--gray-80);
  font-size: 16px;
  text-align: center;
  letter-spacing: 1.5px;
  height: 56px;
  font-weight: 600;
`;

export default Container;
