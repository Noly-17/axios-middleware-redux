// actions.js
export const getTodos = () => ({
  types: ['GET_TODOS', 'GET_TODOS_SUCCESS', 'GET_TODOS_FAILED'],
  payload: {
    request: {
      url: 'https://jsonplaceholder.typicode.com/posts',
    },
  },
});
