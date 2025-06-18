//syntax
// const [state, dispatch] = useReducer(reducer, initialState);
// state: current state
// dispatch: function to send actions
// reducer: function that describes how state changes
// initialState: starting state

import React, { useReducer } from 'react';

// Step 1: Create reducer function
function reducer(state, action) {
switch (action.type) {
    case 'increment':
    return { count: state.count + 1 };
    case 'decrement':
    return { count: state.count - 1 };
    case 'reset':
    return { count: 0 };
    default:
    return state;
}
}

function UseReducer() {
  // Step 2: useReducer hook
const [state, dispatch] = useReducer(reducer, { count: 0 });

return (
    <div>
    <h1>Count: {state.count}</h1>
    <button onClick={() => dispatch({ type: 'increment' })} >+</button>
    <button onClick={() => dispatch({ type: 'decrement' })} >-</button>
    <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
    </div>
);
}

export default UseReducer;
