import React, { useState } from 'react';
import { LEVEL_LIST } from '../common/Constants';
const Formfn = ({ onSubmitForm = () => {} }) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(0);

  const onChangeInput = (e) => {
    setName(e.target.value);
  };

  const getValueSelect = (e) => {
    setLevel(e.target.value);
  };

  const onSubmit = () => {
    onSubmitForm(name, Number(level));
    setName('');
  };

  return (
    <form className="form-inline">
      <div className="form-group mr-5">
        <input
          value={name}
          type="text"
          name="name"
          className="form-control"
          placeholder="Item Name"
          onChange={onChangeInput}
        />
      </div>
      <div className="form-group mr-5">
        <select name="level" onChange={getValueSelect} className="form-control">
          {LEVEL_LIST.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <button onClick={onSubmit} type="button" className="btn btn-primary mr-5">
        Submit
      </button>
      <button type="button" className="btn btn-default">
        Cancel
      </button>
    </form>
  );
};

export default Formfn;
