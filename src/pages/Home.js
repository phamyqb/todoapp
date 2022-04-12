import React, { Component } from 'react';
import { Form, ListItem, Search, Sort, Title } from '../components';
import { MockAPI } from '../services';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      modal: false,
    };
  }

  componentDidMount() {
    MockAPI.getListTodo().then((res) => this.setState({ items: res }));
  }

  showModal = () => {
    this.setState({
      modal: true,
    });
  };

  onSubmit = (valueInput, valueSelect) => {
    console.log(valueInput, valueSelect);
    this.setState({
      items: [...this.state.items, { title: valueInput, level: valueSelect }],
    });
  };

  del = (index) => {
    const array = [...this.state.items];
    array.splice(index, 1);
    this.setState({ items: array });
  };

  render() {
    const { items = [] } = this.state;
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button
              onClick={this.showModal}
              type="button"
              className="btn btn-info btn-block marginB10"
            >
              Add Item
            </button>
          </div>
        </div>
        {this.state.modal ? (
          <div className="row marginB10">
            <div className="col-md-offset-7 col-md-5">
              <Form modal={this.state.modal} onSubmitForm={this.onSubmit} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <ListItem del={this.del} data={items} />
      </div>
    );
  }
}
