// React memo 

import React, { memo } from 'react'

const ChildComponents = memo((props) => {
    console.log('child re rendered')
    
  return (
    <div onClick = {props.handleClick}>
      <button>{props.buttonName}</button>
      
    </div>
  )
})

export default ChildComponents

// When you pass a value as a prop, React.memo() prevents the child from re-rendering if the value remains unchanged. However, when you pass a function as a prop, the child re-renders because the function reference changes on every parent re-render.
