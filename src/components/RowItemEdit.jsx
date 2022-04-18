import React, { Component } from 'react'

export default class RowItemEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020'
        }
    }

    handleChange = (e) => this.setState({ value: e.target.value });

    render() {
        const { value } = this.state;
        return (
            <tr>
                <td className="text-center">6</td>
                <td><input type="text" onChange={this.handleChange} className="form-control" value={value} /></td>
                <td className="text-center">
                    <select className="form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm mr-5">Cancel</button>
                    <button type="button" className="btn btn-success btn-sm">Save</button>
                </td>
            </tr>
        )
    }
}
