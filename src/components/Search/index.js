import React from "react";
import { connect } from "react-redux";
import { Input, Spin } from "antd";
import debounce from "lodash/debounce";

import { searchUsers } from "../../actions/user";
import { WaveLoading } from "../../animations/components/WaveLoading";

const { Option } = Select;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  fetchUser = (value) => {
    console.log("fetching user", value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map((user) => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = (value) => {
    this.setState({
      value,
      fetching: false,
    });
  };

  render() {
    const { fetching, data, value } = this.state;
    const { result } = this.props;

    return (
      <Input.Search
        value={value}
        placeholder="Search @users, posts, questions, communities, groups"
        notFoundContent={fetching ? <WaveLoading /> : null}
        onSearch={this.fetchUser}
        onChange={this.handleChange}
        style={{ width: "100%" }}
      >
        {result.map((u) => (
          <Option key={u.id}>{u.text}</Option>
        ))}
      </Input.Search>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Search);
