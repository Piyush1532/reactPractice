import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reduxpractice/counter/counterslice'
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>App
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
  <p>{count}</p>
    </div>
  )
}

export default App
