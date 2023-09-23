import axios from 'axios';

const axiosMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.payload && action.payload.request) {
      const { request } = action.payload;
      const { url, method, data } = request;

      axios({
        url,
        method: method || 'get',
        data,
      })
        .then((response) => {
          if (Array.isArray(action.types) && action.types.length >= 3) {
            dispatch({
              type: action.types[1], // Success action type
              payload: response.data,
            });
          }
        })
        .catch((error) => {
          if (Array.isArray(action.types) && action.types.length >= 3) {
            dispatch({
              type: action.types[2], // Failure action type
              payload: error.message,
            });
          }
        });
    }

    return next(action);
  };

export default axiosMiddleware;
