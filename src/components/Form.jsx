import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: 0,
    };
  }

 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, level } = this.state;
    const { submitForm = () => {} } = this.props;
    submitForm({ name, level });
    
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mr-5">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Item Name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mr-5">
          <select onChange={this.handleChange} name="level" className="form-control">
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
          onClick={this.props.closeForm}
        >
          Cancel
        </button>
      </form>
    );
  }
}
