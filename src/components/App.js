import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import unsplash from "../api/unsplash";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async searchTerm => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm
      }
    });

    const images = response.data.results;
    this.setState({
      images
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
