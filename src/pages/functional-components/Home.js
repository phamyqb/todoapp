import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoList } from '../../store/actions';
import { Search, Sort, Title, ListItem } from '../../components';

export default function Home() {
    const dispatch = useDispatch();
    const items = useSelector(s => s.homeReducer.data || []);

    useEffect(() => {
        dispatch(getTodoList())
    }, []);

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
                {/* <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button onClick={this.toggleForm} type="button" className="btn btn-info btn-block marginB10">Add Item</button>
                </div> */}
            </div>
            {/* <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                    <Form show={showAddForm} onSubmitForm={this.onSubmitForm} toggleForm={this.toggleForm} />
                </div>
            </div> */}
            <ListItem data={items} />
        </div>
    )
}
