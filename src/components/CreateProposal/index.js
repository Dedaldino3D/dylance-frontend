import { useState } from "react";
import { connect } from "react-redux";
import { func, string } from "prop-types";

// import { createProposal } from "../../actions/proposals";
import { Modal } from "../common";
import { Container } from "./styles";

const CreateProposal = ({ createProposal, active, setActive }) => {
  const [state, setState] = useState({
    description: "",
    files: [],
    links: [],
  });
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    createProposal(...state);
  };

  return (
    <Modal
      active={active}
      close={() => setActive(false)}
      text="Creating a Proposal"
    >
      <Container>Creating proposal</Container>
    </Modal>
  );
};

CreateProposal.propTypes = {
  func: func.isRequired,
};
const mapState = (state) => ({});
const mapDispatch = (dispatcj) => ({});

export default connect(mapState, mapDispatch)(CreateProposal);
