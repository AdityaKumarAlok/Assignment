import React from 'react';

const SearchBox = ({  searchChange }) => {
  return (
    <div className='search_box'>
      <input
        className='searchbox'
        type='search'
        placeholder='search'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;