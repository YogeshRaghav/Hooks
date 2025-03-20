import React, { useRef, useState } from 'react'

const StopWatchUsingRef = () => {
    const [time,setTime] = useState(0)
    const [isDark,setIsDark] = useState(false)
    const [clicked,setClicked] = useState(false)
    const val = useRef(null)
    const inpFoc = useRef(null)

    function startTimer(){
       val.current =  setInterval(() => {
            setTime(time => time+1)
        },1000)
    }

    function StopTimer(){
        clearInterval(val.current)
        val.current = null
    }

    function reset() {
        setTime(0)
    }

    function focuss(){
        inpFoc.current.focus()
    }

    function changeColor() {
        setClicked((prev) => !prev)
        inpFoc.current.style.backgroundColor = clicked ? 'white' : 'red'

    }

  return (
    <div style = {{backgroundColor : isDark ? 'black' : 'white', color : isDark ? "#fff" : "#000", height: "100vh", textAlign: "center", padding: "50px"}}>
       <br/><br/>
       Time : {time} Seconds 

      <br/><br/>

      <button onClick = {startTimer}>Start</button>

      <br/><br/>

      <button onClick = {StopTimer}>Stop</button>

      <br/><br/>

      <button onClick = {reset}>Reset</button>

      <br/><br/>

      <input ref ={inpFoc}  type="text" placeholder='typing' />

      <br/><br/>

      <button onClick = {focuss}> type in input</button>
      <br/><br/>
      <button onClick = {changeColor}>Change Color</button>

      <br/><br/>

        <button onClick = {() => setIsDark(!isDark)}> { isDark ? 'Light Mode' : 'Dark Mode'}</button>
      
    </div>
  )
}

export default StopWatchUsingRef
