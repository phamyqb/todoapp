import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
      valueSelect: 0,
    };
  }
  getValueInput = (e) => {
    this.setState({
      valueInput: e.target.value,
    });
  };

  getValueSelect = (e) => {
    this.setState({
      valueSelect: e.target.value,
    });
  };

  onSubmit = () => {
    const { onSubmitForm = () => {} } = this.props;
    onSubmitForm(this.state.valueInput, this.state.valueSelect);
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mr-5">
          <input
            type="text"
            onChange={this.getValueInput}
            className="form-control"
            placeholder="Item Name"
          />
        </div>
        <div className="form-group mr-5">
          <select onChange={this.getValueSelect} className="form-control">
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <button
          onClick={this.onSubmit}
          type="button"
          className="btn btn-primary mr-5"
        >
          Submit
        </button>
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </form>
    );
  }
}
