import React, { Component } from 'react';
import { LEVEL_LIST } from '../common/Constants';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            level: 0
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        const { name, level } = this.state;
        const { onSubmitForm = () => { } } = this.props;
        onSubmitForm({name, level})
    }

    render() {
        const { name, level } = this.state;
        const {
            show = false,
            toggleForm = () => { }
        } = this.props;

        if (!show) return null;

        return (
            <form className="form-inline">
                <div className="form-group mr-5">
                    <input value={name} type="text" name='name' onChange={this.handleChange} className="form-control" placeholder="Item Name" />
                </div>
                <div className="form-group mr-5">
                    <select name='level' onChange={this.handleChange} className="form-control">
                        {LEVEL_LIST.map(({ level: id, label }) => <option selected={level === id} key={id} value={id}>{label}</option>)}
                    </select>
                </div>
                <button type="button" className="btn btn-primary mr-5" onClick={this.onSubmit}>Submit</button>
                <button type="button" className="btn btn-default" onClick={toggleForm}>Cancel</button>
            </form>
        )
    }
}
