export const getListToDo = (data) => {
  return {
    type: 'todoList/getListToDo',
    payload: data,
  };
};
