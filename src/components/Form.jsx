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
    const { modal, onSubmitForm = () => {} } = this.props;
    onSubmitForm(this.state.valueInput, Number(this.state.valueSelect));
    this.setState({
      modal: false,
      valueInput: '',
    });
    console.log(this.state.valueInput, Number(this.state.valueSelect));
  };

  hideModal = () => {
    const { modal } = this.props;
    this.setState({ modal: !modal });
    console.log(!modal);
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mr-5">
          <input
            value={this.state.valueInput}
            type="text"
            onChange={this.getValueInput}
            className="form-control"
            placeholder="Item Name"
            required
          />
        </div>
        <div className="form-group mr-5">
          <select onChange={this.getValueSelect} className="form-control">
            <option value="0">Low</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
        <button
          onClick={this.onSubmit}
          type="button"
          className="btn btn-primary mr-5"
        >
          Submit
        </button>
        <button
          onClick={this.hideModal}
          type="button"
          className="btn btn-default"
        >
          Cancel
        </button>
      </form>
    );
  }
}
