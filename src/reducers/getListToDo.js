const initialState = [] 

const getListTodo = (state = initialState,action) =>{
    switch (action.type) {
        case 'GET_LIST_TODO':
            return state = action.payload
        default:
            return state
    }
}

export default getListTodo;