// import React from 'react'
import './card.css'
const card = (props) => {
  return (
    <div className="card">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default card