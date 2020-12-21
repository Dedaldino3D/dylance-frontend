import React from "react";
import { connect } from "react-redux";
// import { Input, Spin } from "antd";
// import debounce from "lodash/debounce";

import SearchPresenter from "./presenter";
// import { WaveLoading } from "../../animations/components/WaveLoading";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  handleChange = (value) => {
    this.setState({
      value,
      fetching: false,
    });
  };

  render() {
    return <SearchPresenter {...this.props} handleChange={this.handleChange} />;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Search);
