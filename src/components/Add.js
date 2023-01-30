import React from 'react'

function Add(props) {
  return (
    <>
    <h1>hello i am from Add component</h1>
    <h3>{props.x}</h3>
    <h3>{props.y}</h3>
    <h4>{props.x + props.y}</h4>
    </>
  )
}

export default Add