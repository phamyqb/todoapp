import React, { useState } from "react";

export default function Form(props) {
    const [name,setName] = useState('');
    const [level,setLevel] = useState(0);
  
 

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeLevel = (e) => setLevel(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const { submitForm = () => {} } = props;
    submitForm({ name, level });
  };

 
    return (
      <form className="form-inline">
        <div className="form-group mr-5">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Item Name"
            onChange={handleChangeName}
          />
        </div>
        <div className="form-group mr-5">
          <select onChange={handleChangeLevel} name="level" className="form-control">
            <option value="0">Low</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <button
          type="button "
          className="btn btn-primary mr-5"
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={props.closeForm}
        >
          Cancel
        </button>
      </form>
    );
  
}
