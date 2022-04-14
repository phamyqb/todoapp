import React from "react";
import { LEVEL_LIST } from "../common/Constants";

export default function RowItem(props) {
  const getLevel = (level) => LEVEL_LIST.find((x) => x.level === level);

  const { item = {}, index = 0 } = props;
  const level = getLevel(item?.level);

  const getItemEdit = () =>{
    const {id,title,level} = item;
    const {onEditItem =()=>{}} = props;
    onEditItem({id,title,level});
 
  }
 
  return (
      
    <tr>
      <td className="text-center">{index+1}</td>
      <td>{item?.title}</td>
      <td className="text-center">
        <span className={`label ${level?.className}`}>{level?.label}</span>
      </td>
      <td>
        <button
          type="button"
          onClick={getItemEdit}
          className="btn btn-warning btn-sm mr-5"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={props.handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
