import React from 'react';
import { LEVEL_LIST } from '../common/Constants';
const Rowitemeditfn = ({ item = {}, close = () => {} }) => {
  const cancelBtn = () => {
    close(item.id);
  };
  return (
    <tr>
      <td className="text-center">{item.id}</td>
      <td>
        <input placeholder={item.title} type="text" className="form-control" />
      </td>
      <td className="text-center">
        <select name="level" className="form-control">
          {LEVEL_LIST.map(({ level: id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button
          onClick={cancelBtn}
          type="button"
          className="btn btn-default btn-sm mr-5"
        >
          Cancel
        </button>
        <button
          //   onClick={onSubmit}
          type="button"
          className="btn btn-success btn-sm"
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default Rowitemeditfn;
