import React, {useState } from 'react'

const Throttling = () => {

    const [click,setClicked] = useState(0)

    const throttle = ((fn,d) => {
        return function(){
            setTimeout(() => {
                fn()
            },d)
        }
    })

    const handleClick = throttle(() => {
        setClicked(click + 1)
    },1000)

  return (
    <div>
      <button onClick = {handleClick}>Click me</button>
      <h3>{click}</h3>
    </div>
  )
}

export default Throttling

// In throttling a function or event(button click) is executed only once no matter how many time an event is triggered.