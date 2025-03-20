import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [count,setCount] = useState(0)
    let val = useRef(0) // it persist it current value on every re render
    let btnRef = useRef() // it used to access and manipulate without causing re renders the components

    function handleClick(){
        val.current = val.current + 1
        setCount(count + 1)
        console.log('Value is increasing',val.current)
    }

    function changeColor(){
        btnRef.current.style.background = 'red'
    }

  return (
    <div>
      <h3>Count : {count}</h3>
      <button ref = {btnRef} onClick = {handleClick}>Increment</button>
      <br/><br/>

      <button onClick = {changeColor}>Change the color the of Increment button</button>
    </div>
  )
}

export default UseRef
