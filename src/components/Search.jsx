import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: '',
    };
  }
  getValueSearch = (e) => {
    this.setState({
      valueSearch: e.target.value,
    });
    console.log(this.state);
  };

  delValueSearch = () => {
    this.setState({
      valueSearch: '',
    });
  };
  render() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filterPosts = (posts, query) => {
      if (!query) {
        return posts;
      }

      return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
      });
    };

    return (
      <div className="input-group">
        <input
          value={this.state.valueSearch}
          onChange={this.getValueSearch}
          type="text"
          className="form-control"
          placeholder="Search item name"
        />
        <span className="input-group-btn">
          <button
            onClick={this.delValueSearch}
            className="btn btn-info"
            type="button"
          >
            Clear
          </button>
        </span>
      </div>
    );
  }
}
