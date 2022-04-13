import React from 'react';
import Swal from 'sweetalert2';
const Rowitemfn = ({
  item = {},
  index = 0,
  del = () => {},
  edit = () => {},
}) => {
  const switchCase = (props) => {
    switch (props) {
      case 0:
        return <div className={'label label-info'}>Low</div>;
      case 1:
        return <div className={'label label-default'}>Small</div>;
      case 2:
        return <div className={'label label-warning'}>Medium</div>;
      case 3:
        return <div className={'label label-danger'}>Hard</div>;
      default:
        return <div></div>;
    }
  };
  const delItem = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        del(item.id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  const editItem = () => {
    edit(item.id);
  };
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{item?.title}</td>
      <td className="text-center">{switchCase(item?.level)}</td>
      <td>
        <button
          onClick={editItem}
          type="button"
          className="btn btn-warning btn-sm mr-5"
        >
          Edit
        </button>
        <button
          onClick={delItem}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Rowitemfn;
