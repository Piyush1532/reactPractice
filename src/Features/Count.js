import React from "react";
import { increment, decrement, reset,incrementByAmount } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
const [incrementAmount,setIncrementAmount]=useState(0);
const addvalue=Number(incrementAmount)||0;

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset());
  };

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/> 
    <div>
    <button onClick={resetAll}>Reset</button>
    <button onClick={()=> dispatch(incrementAmount(addvalue))}>AddAmt</button>
    </div>
      </div>
    </section>
  );
};

export default Counter;
