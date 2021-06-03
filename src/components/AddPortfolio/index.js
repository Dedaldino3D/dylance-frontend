import { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bool, func } from "prop-types";

import { Modal, Input } from "../common";

const PortfolioContainer = styled.form``;

const AddPortfolio = ({ active, setActive, addPortfolio }) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState((state) => {
      if (e.target.name === "files") {
        return {
          files: e.target.files,
        };
      }
      return {
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    addPortfolio(state);
    setState({});
  };
  return (
    <Modal
      text="Adding New Portfolio"
      active={active}
      close={() => setActive(!active)}
    >
      <PortfolioContainer method="POST" onSubmit={handleSubmit}>
        <Input
          type="files"
          multiple
          name="files"
          onChange={handleChange}
          placeholder="Choose files"
        />
        {/* TODO: add portfolio links */}
      </PortfolioContainer>
    </Modal>
  );
};

AddPortfolio.propTypes = {
  active: bool,
  addPortfolio: func.isRequired,
};

const mapDispatch = (dispatch) => ({});

export default connect(null, mapDispatch)(AddPortfolio);
