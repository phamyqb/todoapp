import React, { Component } from 'react';
import { LEVEL_LIST } from '../common/Constants';
import Swal from 'sweetalert2';
export default class RowItem extends Component {
  getLevel = (level) => LEVEL_LIST.find((x) => x.level === level);

  render() {
    const { item = {}, index = 0, delItem = () => {} } = this.props;
    const level = this.getLevel(item?.level);

    const del = () => {
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
          delItem(index);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    };
    const edit = () => {
      const { editForm = () => {} } = this.props;
      editForm(index);
    };

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item?.title}</td>
        <td className="text-center">
          <span className={`label ${level?.className}`}>{level?.label}</span>
        </td>
        <td>
          <button
            onClick={edit}
            type="button"
            className="btn btn-warning btn-sm mr-5"
          >
            Edit
          </button>
          <button onClick={del} type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
