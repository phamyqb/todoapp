import React, { useState } from 'react';
import RowItem from './RowItem';
import RowItemEdit from './RowItemEdit';
import Rowitemfn from './RowItemFn';
const Listitemfn = ({ data = [], del = () => {} }) => {
  const [editForm, setEditForm] = useState([]);
  const delItem = (id) => {
    del(id);
  };

  const editItem = (id) => {
    setEditForm([...editForm, id]);
  };
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
          {data?.map((item, index) =>
            !editForm.includes(item.id) ? (
              <Rowitemfn
                del={delItem}
                edit={editItem}
                item={item}
                index={index}
                key={item.id}
                // editForm={editForm}
                // editState={this.state.editForm}
              />
            ) : (
              <RowItemEdit item={item} index={index} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Listitemfn;
