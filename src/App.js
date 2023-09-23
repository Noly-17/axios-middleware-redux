import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const App = (props) => {
  const { age, onAgeUp, onAgeDown, todos } = props;
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="App">
      <div className="Age-label">
        Your age: <span>{age}</span>
      </div>
      <button onClick={() => dispatch(getTodos())}>Age UP</button>
      <button onClick={onAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  age: state.age,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', payload: 10 }), // Dispatch ADD_AGE action with payload 10
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', payload: 10 }), // Dispatch REMOVE_AGE action with payload 10
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
