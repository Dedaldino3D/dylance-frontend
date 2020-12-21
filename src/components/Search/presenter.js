import React from "react";
import PropTypes from "prop-types";
// import { IoIosSearch } from "react-icons/io";
// import { useMediaQuery } from "react-responsive";

import Container, {
  FormSearch,
  NoFound,
  List,
  ResultContainer,
} from "./styles";

import Avatar from "../Avatar";
import { Input } from "./styles";
import RotateSpinLoader from "../Loading";

export const SearchForm = (props) => {
  // const [showSearchForm, setShowSearchForm] = useState(true);
  // const isDesktop = useMediaQuery({ minDeviceWidth: 780 });

  // useEffect(() => {
  //   console.log("show search:", isDesktop);
  //   if (isDesktop) {
  //     setShowSearchForm(true);
  //   } else {
  //     setShowSearchForm(false);
  //   }
  // }, [isDesktop]);

  return (
    <Container>
      {/* <IoIosSearch className="search_icon-form" /> */}
      <FormSearch method="GET" onSubmit={props.handleSubmit}>
        <Input
          type="text"
          placeholder="Search by users, posts, communitiies, questions..."
          name="search"
          onClick={props.handleClick}
          value={props.term}
          onChange={props.onInputChange}
        />
        {/* <ResultSearch isLoading={false} result={true}/> */}
      </FormSearch>
    </Container>
  );
};

export const ResultSearch = (props) => (
  <ResultContainer>
    {props.isLoading ? (
      <RotateSpinLoader />
    ) : props.result ? (
      <RenderUserSearch />
    ) : (
      <NotFound />
    )}
  </ResultContainer>
);

const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RenderUserSearch = (props) => userList.map((i) => <ResultUser key={i} />);

const ResultUser = (props) => (
  <List>
    <Avatar tam={32} />
    <span>dedaldino</span>
  </List>
);

// const ResultPost = props => (

// )

// const ResultCommunity = props => (

// )

const NotFound = (props) => (
  <NoFound>what you looking for, was not found! sorry, try other word</NoFound>
);

SearchForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default SearchForm;
