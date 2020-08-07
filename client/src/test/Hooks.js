import React, { useState, useEffect } from 'react'

const Test = () => {
  const [count, setCount] = useState(5)
  const [color, setColor] = useState('yellowgreen')

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      console.log(interval)
      clearInterval(interval)
    }
  }, [count])

  const increment = () => {
    if (count >= -1) {
      setColor('yellowgreen')
    }
    setCount(count + 1)
  }

  const decrement = () => {
    if (count <= 0) {
      setColor('red')
    }
    setCount(count - 1)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <button onClick={increment}>Increment</button>
      <h1 style={{ color }}>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Test
