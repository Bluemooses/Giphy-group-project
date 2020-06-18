import React, { Component } from "react";
import { connect } from "react-redux";

class SearchForm extends Component {
  state = {
    searchInput: " ",
  };

  handleSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state);
  };

  setSearch = (event) => {
    this.props.dispatch({
      type: "GET_SEARCH",
      payload: this.state.searchInput,
    });
    this.setState({
      searchInput: " ",
    });
  };

  render() {
    return (
      <div>
        <span>Find GIFs: </span>
        <input
          type="text"
          placeholder="What's your flavor?"
          onChange={this.handleSearchInput}
        />
        <button onClick={this.setSearch} type="submit">
          Search
        </button>
      </div>
    );
  }
}

export default connect()(SearchForm);
