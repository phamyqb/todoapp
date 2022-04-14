import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { Form, ListItem, Search, Sort, Title } from '../components';
import { MockAPI } from '../services';

export default function Home() {
    const [items, setItems] = useState([]);
    const [isHide, setIsHide] = useState(true);
    const [listSearch, setListSearch] = useState([])


    useEffect(() => {
        MockAPI.getListTodo().then(res => setItems(res));
    }, [])

    const toggleForm = () => {
        setIsHide(!isHide)
    }

    const addItem = (item) => {
        items.push(item);
    }

    const deleteItem = (index) => {
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
                const newListItem = [...items];
                newListItem.splice(index, 1);
                setItems(newListItem)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    const handleSearch = (keyword) => {
        
        if (keyword.keyword !== '') {
            const rs = items.filter((item) => {
                return item.title.toLowerCase().includes(keyword.keyword.toLowerCase())
            });
            setListSearch(rs);

        }

    }
    const submitForm = ({
        name,
        level
    }) => {
        const newID = uuidv4();
        const newItem = {
            id: newID,
            title: name,
            level: parseInt(level)
        }
        if (name.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name field can not be empty!!',
            })
            name = '';
        } else {
            Swal.fire({
               
                icon: 'success',
                title: 'Successfully added',
                showConfirmButton: false,
                timer: 1500
              })
            addItem(newItem);
            toggleForm();
        }
    }

    const handleEditItem = ({ id, title, level }) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const newItem = { id, title, level };
                const newListItem = [...items]
                
                for (let i = 0; i < newListItem.length; i++) {
                    if (newListItem[i].id === newItem.id) {
                        newListItem[i] = newItem
                        if (newItem.level) {

                            newListItem[i].level = parseInt(newItem.level)
                        } else {
                            newListItem[i].level = 0;
                        }
                    }
                }
                setItems(newListItem);
                Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

    }
    return (
        <div className="container">
            <Title />
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Search handleSearch={handleSearch} />
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Sort />
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button type="button" className="btn btn-info btn-block marginB10" onClick={toggleForm}>Add Item</button>
                </div>
            </div>
            <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                    {isHide ? null : <Form submitForm={submitForm} closeForm={toggleForm} />}
                </div>
            </div>
            <ListItem onEditItem={handleEditItem} deleteItem={deleteItem} data={listSearch.length > 0 ? listSearch : items} />
        </div>
    )
}
