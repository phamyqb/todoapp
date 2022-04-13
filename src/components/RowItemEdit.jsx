import React, { Component } from 'react';
import { LEVEL_LIST } from '../common/Constants';
export default class ListItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
      valueSelect: '',
    };
  }
  getLevel = (level) => LEVEL_LIST.find((x) => x.level === level);
  render() {
    const { item = {}, index = 0 } = this.props;

    const cancelBtn = () => {
      const { cancel = () => {} } = this.props;
      cancel(index);
    };

    const getValueInput = (e) => {
      this.setState({
        valueInput: e.target.value,
      });
      console.log(this.state.valueInput);
    };

    const getValueSelect = (e) => {
      this.setState({
        valueSelect: e.target.value,
      });
    };

    const onSubmit = () => {
      const { onSubmitForm = () => {} } = this.props;
      onSubmitForm(this.state.valueInput, Number(this.state.valueSelect));
      console.log(this.state.valueInput, Number(this.state.valueSelect));
    };

    return (
      <tr>
        <td className="text-center">{item.id}</td>
        <td>
          <input
            value={this.state.valueInput}
            onChange={getValueInput}
            type="text"
            className="form-control"
          />
        </td>
        <td className="text-center">
          <select
            name="level"
            onChange={getValueSelect}
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
          <button
            onClick={onSubmit}
            type="button"
            className="btn btn-success btn-sm"
          >
            Save
          </button>
        </td>
      </tr>
    );
  }
}
