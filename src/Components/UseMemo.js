import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count,setCount] = useState(0)
    const [input,setInput] = useState(0)

    function expensiveTask(num){
        console.log('function running')
        for(let i = 0; i < 1000000000; i++){}
        return num*2
    }

    let doubleValue = useMemo(() => expensiveTask(input) ,[input])

  return (
    <div>
      <button onClick = {() => setCount(count+1)}>Increment</button>
      <h4>{count}</h4>

      <input 
      type="number" 
      placeholder = 'Enter Number'
      value = {input}
      onChange = {(e) => setInput(e.target.value)}
      />

      <h3>{doubleValue}</h3>

      <button onClick = {() => setCount(0)}> Reset</button>

    </div>
  )
}

export default UseMemo
