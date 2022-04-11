import React, { Component } from 'react'
import { Form, ListItem, Search, Sort, Title } from '../components';
import { MockAPI } from '../services';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isHide: true,
            item: {}
        }
    }

    componentDidMount() {
        MockAPI.getListTodo().then(res => this.setState({
            items: res
        }));
        MockAPI.getItemById(2).then(res => this.setState({
            item:res
        }))


    }

   

    toggleForm = () => {
        this.setState({
            isHide: !this.state.isHide
        });
    }
    addItem = (item) => {
        this.state.items.push(item);
    }

    handleDeteleItem = id => {

    }

    submitForm = ({
        name,
        level
    }) => {
        const newID = this.state.items.length + 1;
        const newItem = {
            id: newID,
            title: name,
            level: parseInt(level)
        }
        if(name.trim()===''){
            alert('Name field can not be empty');
            name=''; 
        }else{
            this.addItem(newItem);
            this.toggleForm();
        }
    }

    render() {
        
        const { items = [] } = this.state;
        console.log(this.state.item);
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
                        <button type="button" className="btn btn-info btn-block marginB10" onClick={this.toggleForm}>Add Item</button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        {this.state.isHide ? null : <Form submitForm={this.submitForm} closeForm={this.toggleForm}/>}
                    </div>
                </div>
                <ListItem data={items} />
            </div>
        )
    }
}
