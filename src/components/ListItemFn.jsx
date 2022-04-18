import React, { useState } from 'react';
import Rowitemeditfn from './RowItemEditFn';
import Rowitemfn from './RowItemFn';
const Listitemfn = ({ data = [], del = () => {} }) => {
  const [editForm, setEditForm] = useState([]);
  console.log(data);
  const delItem = (id) => {
    del(id);
  };

  const openEditForm = (id) => {
    setEditForm([...editForm, id]);
  };

  const closeEditForm = (id) => {
    setEditForm([...editForm.filter((item) => item !== id)]);
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
                key={item.id}
                del={delItem}
                open={openEditForm}
                item={item}
                index={index}
              />
            ) : (
              <Rowitemeditfn
                close={closeEditForm}
                key={item.id}
                item={item}
                index={index}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Listitemfn;
