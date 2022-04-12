import React, { Component } from 'react'
import { Form, ListItem, Search, Sort, Title } from '../components';
import { MockAPI } from '../services';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isHide: true,
            listSearch: [],
        }
    }

    componentDidMount() {
        MockAPI.getListTodo().then(res => this.setState({
            items: res
        }));
       

    }

    toggleForm = () => {
        this.setState({
            isHide: !this.state.isHide
        });
    }

    addItem = (item) => {
        this.state.items.push(item);
    }

    deleteItem = (index) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const newListItem = [...this.state.items];
                newListItem.splice(index,1);
                this.setState({
                    items: newListItem
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
          })
    } 
    handleSearch = (keyword) => {
        if (keyword.keyword !== ''){
            const rs = this.state.items.filter((item)=>{
                return item.title.toLowerCase().includes(keyword.keyword.toLowerCase())
            });
            this.setState({
                listSearch: rs,
            });
            
        }

    }

    submitForm = ({
        name,
        level
    }) => {
        const newID = uuidv4();
        const newItem = {
            id: newID,
            title: name,
            level: parseInt(level)
        }
        if(name.trim()===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name field can not be empty!!',
              })
            name=''; 
        }else{
            this.addItem(newItem);
            this.toggleForm();
        }
    }

    render() {
        const { items = [],listSearch=[] } = this.state;
        console.log(items)
        return (
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search handleSearch={this.handleSearch} />
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
                <ListItem deleteItem={this.deleteItem} data={listSearch.length >0 ? listSearch : items} />
            </div>
        )
    }
}
