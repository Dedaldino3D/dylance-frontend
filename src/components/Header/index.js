import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaBell, FaWarehouse, FaGlobeAfrica, FaCog } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { GiStarAltar } from "react-icons/gi";

import { getCurrentUser } from "../../selectors/user";

import SearchForm from "../Search/presenter";
import Avatar from "../Avatar";
import Container from "./styles";

export const Header = (props) => {
  return (
    <Container>
      <SearchForm />
      <div className="links">
        <NavLink activeClassName="active-header_link" to={"/home"}>
          <FaWarehouse />
        </NavLink>
        <NavLink activeClassName="active-header_link" to={`/${props.username}`}>
          <Avatar tam={25} />
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/messages">
          <IoIosChatboxes />
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/communities">
          <FaGlobeAfrica />
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/hall/global">
          <GiStarAltar />
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/notifications">
          <FaBell />
        </NavLink>
        <NavLink activeactiveClassName="active-header_link" to="/settings">
          <FaCog />
        </NavLink>
      </div>
    </Container>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {
    user: { username },
  } = getCurrentUser(state);

  return {
    username,
  };
};

export default connect(mapStateToProps)(Header);
