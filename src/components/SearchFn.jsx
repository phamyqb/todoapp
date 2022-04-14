import React, { useState } from 'react';

const Searchfn = ({ handleSearch = () => {} }) => {
  const [valueSearch, setValueSearch] = useState('');

  const getValueSearch = (e) => {
    setValueSearch(e.target.value);
    handleSearch(valueSearch);
  };

  const delValueSearch = () => {
    setValueSearch('');
  };

  return (
    <div className="input-group">
      <input
        value={valueSearch}
        onChange={getValueSearch}
        type="text"
        className="form-control"
        placeholder="Search item name"
      />
      <span className="input-group-btn">
        <button onClick={delValueSearch} className="btn btn-info" type="button">
          Clear
        </button>
      </span>
    </div>
  );
};

export default Searchfn;
