import React, { Component } from 'react';
import { LEVEL_LIST } from '../common/Constants';
export default class ListItemEdit extends Component {
  getLevel = (level) => LEVEL_LIST.find((x) => x.level === level);
  render() {
    const { item = {}, index = 0 } = this.props;

    const cancelBtn = () => {
      const { cancel = () => {} } = this.props;
      cancel(index);
    };
    return (
      <tr>
        <td className="text-center">{item.id}</td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td className="text-center">
          <select
            name="level"
            onChange={this.handleInput}
            className="form-control"
          >
            {LEVEL_LIST.map(({ level: id, label }) => (
              <option selected={item.level === id} key={id} value={id}>
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
          <button type="button" className="btn btn-success btn-sm">
            Save
          </button>
        </td>
      </tr>
    );
  }
}
