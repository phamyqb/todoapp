import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowItem from './RowItem';
import RowItemEdit from './RowItemEdit';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: [],
    };
  }

  render() {
    const delItem = (index) => {
      const { del = () => {} } = this.props;
      del(index);
    };

    const editForm = (index) => {
      this.setState({
        editForm: [...this.state.editForm, index],
      });
    };

    const cancelForm = (index) => {
      console.log(index);
      this.setState({
        editForm: [...this.state.editForm.splice(index, 1)],
      });
    };

    const { data = [] } = this.props;
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
              !this.state.editForm.includes(index) ? (
                <RowItem
                  delItem={delItem}
                  item={item}
                  index={index}
                  key={item.id}
                  editForm={editForm}
                  editState={this.state.editForm}
                />
              ) : (
                <RowItemEdit item={item} index={index} cancel={cancelForm} />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
};

ListItem.defaultProps = {
  data: [],
};
