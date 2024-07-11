import React from 'react'

const CounterChildComponent = ({ counter, increment, decrement }) => {
    return (
      <div>
        <h1>2. COUNTER COMPONENT</h1>
        <p className="mx-5">Current count: {counter}</p>
        <button className=" my-2 mx-5 color: bg-green-500 text-white " onClick={increment}>Increment</button> <br/>
        <button className=" my-2 mx-5 color: bg-red-500 text-white "  onClick={decrement}>Decrement</button> 
      </div>
    );
  };

export default CounterChildComponent
