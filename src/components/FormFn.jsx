import React from "react";
import { useState } from "react/cjs/react.production.min";

function FormFn({
    closeForm = () =>{},
    
}) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);

  const handleNameChange = (e) => setName(e.target.value);
  const handleLevelChange = (e) => setLevel(e.target.value);

  return (
    <form className="form-inline">
      <div className="form-group mr-5">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Item Name"
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group mr-5">
        <select
          onChange={handleLevelChange}
          name="level"
          className="form-control"
        >
          <option value="0">Low</option>
          <option value="1">Small</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      <button
        type="button "
        className="btn btn-primary mr-5"
        onClick={this.onSubmit}
      >
        Submit
      </button>
      <button
        type="button"
        className="btn btn-default"
        onClick={closeForm}
      >
        Cancel
      </button>
    </form>
  );
}

export default FormFn;
