import React, { Component } from "react";

export default class RowItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      value: "",
      level: 0,
      id: 0,
      editing: false,
    };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value, editing: true });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { itemEdit = {} } = nextProps;
    const { editing } = prevState;
    if (itemEdit?.title !== prevState.title && !editing) {
      return { value: itemEdit?.title, level: itemEdit?.level, id:itemEdit?.id };
    } else return null;
  }

  render() {
    const { value } = this.state;
    const { level } = this.state;

    return (
      <tr>
        <td className="text-center">{this.state.id}</td>
        <td>
          <input
            type="text"
            name="value"
            onChange={this.handleChange}
            className="form-control"
            value={value}
          />
        </td>
        <td className="text-center">
          <select name="level" className="form-control">
            <option value="0">Low</option>
            <option value="1" selected={level == 1 ? "selected" : null}>
              Small
            </option>
            <option value="2" selected={level == 2 ? "selected" : null}>
              Medium
            </option>
            <option value="3" selected={level == 3 ? "selected" : null}>
              High
            </option>
          </select>
        </td>
        <td>
          <button type="button" className="btn btn-default btn-sm mr-5">
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
