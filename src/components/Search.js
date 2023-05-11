import React from "react";

function Search({ search, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          value={search}
          className="prompt"
          onChange={(e) => onSearch(e)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
