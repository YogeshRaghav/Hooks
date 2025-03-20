import React, { useEffect, useState } from 'react'

const Debouncing = () => {

    const [inp,setInp] = useState('')
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((resData) => setData(resData))

    useEffect (() => {
        const timer = setTimeout(() => {
            if(inp){
                setFilterData(
                    data.filter((item) => 
                        item.title.includes(inp)
                    )
                )

            }
            else{
                setFilterData(data)
            }
        },1000)

        return () => clearTimeout(timer)
    },[inp])

  return (
    <div>
      <input 
      type="text" 
      placeholder = 'Typing'
      onChange = {(e) => setInp(e.target.value)}
      />

    <ul>
        {filterData.map((item) => {
            return <li><h3>{item.title}</h3> <p>{item.body}</p></li>
        })}
    </ul>
    </div>
  )
}

export default Debouncing
