import React, { useCallback, useState } from 'react'
import ChildComponents from './ChildComponents'

const UseCallback = () => {

    const [count,setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    },[])

    
  return (

    <div>        
       <h3>Count : {count}</h3>
      <button onClick = {handleClick}>Increment</button>

      <ChildComponents buttonName = 'Click me2' handleClick = {handleClick}/>
    </div>
  )
}

export default UseCallback
