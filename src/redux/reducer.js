const initState = {
  list: [],
  item: {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/getListToDo':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
