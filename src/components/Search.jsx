import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          keyword: "",
        };
      }
    
     
      
      
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });

      
      };
      search = () =>{
        const { keyword} = this.state;
        const { handleSearch = () => {} } = this.props;
        handleSearch({ keyword}); 
      }

    render() {
        return (
            <div className="input-group">
                <input type="text" name="keyword" className="form-control" placeholder="Search item name" onChange={this.handleChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={this.search}>Clear</button>
                </span>
            </div>
        )
    }
}
