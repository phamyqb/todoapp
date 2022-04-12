import React, { Component } from "react";
import PropTypes from "prop-types";
import RowItem from "./RowItem";
import RowItemEdit from "./RowItemEdit";
import { MockAPI } from "../services";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemEdit: {},
      isShowFormEdit: false,
    };
  }

  componentDidMount() {
    MockAPI.getListTodo().then((res) => this.setState({ items: res }));
  }
  toggleShowFormEdit = () => {
    this.setState({
      isShowFormEdit: !this.state.isShowFormEdit,
    });
  };
  handleEdit = (id) => {
    MockAPI.getItemById(id).then((res) => this.setState({ itemEdit: res }));
    
  };
  handleDelete = (index) => {
    const { deleteItem = () => {} } = this.props;
    deleteItem(index);
  };
  render() {
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
            {data.map((item, index) => {
                if (this.state.itemEdit.id === item.id){
                    return  <RowItemEdit itemEdit={this.state.itemEdit} />
                }
                return <RowItem
                handleEdit={() => this.handleEdit(item.id)}
                key={item.id}
                item={item}
                index={index}
                handleDelete={() => this.handleDelete(index)}
              />
            }
               
               
              
              
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
