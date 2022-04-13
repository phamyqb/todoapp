import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import RowItem from "./RowItem";
import RowItemEdit from "./RowItemEdit";
import { MockAPI } from "../services";

export default function ListItem(props) {
  const [items, setItems] = useState([]);
  const [itemEdit, setItemEdit] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    MockAPI.getListTodo().then((res) => setItems(res));
  }, []);

  const toggleShowFormEdit = (id) => {
    setEditingId(id);
  };

  const closeFormEdit = () => {
    setEditingId(null);
  };

  const openFormEdit = ({ id, title, level }) => {
    setItemEdit({
      id,
      title,
      level,
    });
    toggleShowFormEdit(id);
  };

  const handleEditItem = ({id,title,level}) =>{
    const {onEditt = () => {}}= props;
    onEditt({id,title,level})
    closeFormEdit();  
  }

  const handleDelete = (index) => {
    const { deleteItem = () => {} } = props;
    deleteItem(index);
  };

  const { data = [] } = props;

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th width="10%" className="text-center">
              #
            </th>
            <th>Name</th>
            <th width="15%" className="text-center">
              Level
            </th>
            <th width="15%">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            item.id === editingId ? (
              <RowItemEdit
                key={itemEdit.id}
                id={itemEdit.id}
                title={itemEdit.title}
                closeFormEdit={closeFormEdit}
                onEdit={handleEditItem}
              />
            ) : (
              <RowItem
                onEditItem={() => openFormEdit(item)}
                key={item.id}
                item={item}
                index={index}
                handleDelete={() => handleDelete(index)}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
};

ListItem.defaultProps = {
  data: [],
};
