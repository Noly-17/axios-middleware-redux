const initialState = {
  age: 25,
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.payload,
      };

    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.payload,
      };

    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
