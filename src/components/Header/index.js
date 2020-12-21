import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import { FaBell, FaWarehouse, FaGlobeAfrica, FaCog } from "react-icons/fa";
// import { IoIosChatboxes } from "react-icons/io";
// import { GiStarAltar } from "react-icons/gi";

// import { getCurrentUser } from "../../selectors/users";

import SearchForm from "../Search/presenter";
import Container from "./styles";

export const Header = (props) => {
  return (
    <Container>
      <SearchForm />
      <div className="links">
        <NavLink activeClassName="active-header_link" to="/home">
          Home
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/messages">
          Messages
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/notifications">
          Notifications
        </NavLink>
        <NavLink activeClassName="active-header_link" to="/profile">
          Profile
        </NavLink>
      </div>
    </Container>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  // const {
  //   user: { username },
  // } = getCurrentUser(state);

  return {
    username: "dedaldino",
  };
};

export default connect(mapStateToProps)(Header);
