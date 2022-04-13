import React, { Component, useState } from "react";

export default function Search(props) {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e) => setKeyword(e.target.value);
  const search = () => {
    const { handleSearch = () => {} } = props;
    handleSearch({ keyword });
  };

  return (
    <div className="input-group">
      <input
        type="text"
        name="keyword"
        className="form-control"
        placeholder="Search item name"
        onChange={handleChangeKeyword}
      />
      <span className="input-group-btn">
        <button className="btn btn-info" type="button" onClick={search}>
          Clear
        </button>
      </span>
    </div>
  );
}
