import React, { useEffect, useState } from "react";

export default function RowItemEdit(props) {
  const { id, title: propTitle, level: propLevel } = props;
  const [title, setTitle] = useState(propTitle);
  const [level, setLevel] = useState(0);
  //   const [id, setId] = useState(0);
  //   const [editing, setEditing] = useState(false)

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleLevelChange = (e) => setLevel(e.target.value)
  
  useEffect(() => {
    setTitle(propTitle);
  }, [propTitle]);
  useEffect(()=>{
    setLevel(propLevel);

  },[propLevel])

  const editItem =()=>{
    const {onEdit = () => {}} =props;
    onEdit({id,title,level});
  }
  return (
    <tr>
      <td className="text-center">{id}</td>
      <td>
        <input
          type="text"
          name="value"
          className="form-control"
          value={title}
          onChange={handleTitleChange}
        />
      </td>
      <td className="text-center">
        <select onChange={handleLevelChange} name="level" className="form-control">
          <option value="0">Low</option>
          <option value="1" selected={level == 1 ? 'selected' : null}>Small</option>
          <option value="2" selected={level == 2 ? 'selected' : null}>Medium</option>
          <option value="3" selected={level == 3 ? 'selected' : null}>High</option>
        </select>
      </td>
      <td>
        <button
          onClick={props.closeFormEdit}
          type="button"
          className="btn btn-default btn-sm mr-5"
        >
          Cancel
        </button>
        <button onClick={editItem} type="button" className="btn btn-success btn-sm">
          Save
        </button>
      </td>
    </tr>
  );
}

// static getDerivedStateFromProps(nextProps, prevState) {
//   const { itemEdit = {} } = nextProps;
//   const { editing } = prevState;
//   if (itemEdit?.title !== prevState.title && !editing) {
//     return { value: itemEdit?.title, level: itemEdit?.level, id:itemEdit?.id };
//   } else return null;
// }
