import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import noPhoto from "../../images/noPhoto.jpg"

const Container = styled.div`
  position: relative;
  flex: 0 0 auto;
`;

const UserStatus = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  bottom: -2px;
  right: -2px;
  border: 2px solid var(--white);
  border-radius: 20px;
  background: var(--green);
`;

const Img = styled.img`
  width: ${(props) => `${props.tam}px`};
  height: ${(props) => `${props.tam}px`};
  border-radius: 50%;
  max-width: 100%;
  cursor: pointer;
  flex: 0 0 auto;

  ${(props) =>
    props.quarter &&
    css`
      border-radius: 10px;
    `}
`;

const Avatar = (props) => (
  <Container style={props.style} className={props.className}>
    <Img
      src={props.source || noPhoto}
      width={props.tam || 50}
      height={props.tam || 50}
      quarter={props.quarter}
      alt={`${props.alt}_image`}
    />
    {props.online && <UserStatus />}
  </Container>
);

Avatar.propTypes = {
  source: PropTypes.string,
  tam: PropTypes.number,
  alt: PropTypes.string,
};

export default Avatar;
