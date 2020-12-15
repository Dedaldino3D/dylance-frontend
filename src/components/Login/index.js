import { useState } from "react";
import { connect } from "react-redux";

import { login } from "../../actions/auth";
import { Container } from "./styles";

const Login = ({ login }) => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state.username, state.password);
  };

  return <Container></Container>;
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapState, mapDispatch)(Login);
