import React from 'react'

const Test = ({ count, setCount }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setCount}>increment</button>
    </div>
  )
}

export default Test
