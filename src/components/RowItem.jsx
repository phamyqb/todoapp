import React, { Component } from 'react'
import { LEVEL_LIST } from '../common/Constants';
import { MockAPI } from '../services';

export default class RowItem extends Component {
   
    getLevel = (level) => LEVEL_LIST.find(x => x.level === level);
  
    handleEdit = (value)=> {
        console.log("value", value);
    }

   render() {
       const { item = {}, index = 0 } = this.props;
        const level = this.getLevel(item?.level);
        
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item?.title}</td>
                <td className="text-center"><span className={`label ${level?.className}`}>{level?.label}</span></td>
                <td>
                    <button type="button" onClick = {()=>this.handleEdit(item)} className="btn btn-warning btn-sm mr-5">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" >Delete</button>
                </td>
            </tr>
        )
    }
}
