import React from 'react';

function Search({ handleSearch }) {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default Search;