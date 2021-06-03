import { useState } from "react";
import { connect } from "react-redux";
import { func, string } from "prop-types";

// import { createProposal } from "../../actions/proposals";
import { Modal, Input, Textarea } from "../common";
import { Container } from "./styles";

const CreateProposal = ({ createProposal, active, setActive }) => {
  const [state, setState] = useState({
    title: "",
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
      <Container>
        <form method="POST" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={state.title}
            name="title"
            onChange={handleChange}
            placeholder="Proposal Subject"
          />
          <br></br>
          <Textarea
            onChange={handleChange}
            name="description"
            value={state.description}
            placeholder="Proposal Description"
          />
          <button type="submit">Send proposal</button>
        </form>
      </Container>
    </Modal>
  );
};

CreateProposal.propTypes = {
  func: func.isRequired,
};
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(CreateProposal);
