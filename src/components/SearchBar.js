import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onFormSubmit = event => {
    this.props.onSubmit(this.state.searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Here:</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
              placeholder="Enter Search Term"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
