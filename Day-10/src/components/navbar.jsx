// import React from 'react'
import { useEffect } from "react"
const navbar = ({ color }) => {

  //case-1 run on every render

  useEffect(() => {

    alert(' run on every render')

  })

  //case-2 run on first render

  useEffect(() => {

    alert('Welcome to my page')

  }, [])

  //case-3 run on first render and color change
  useEffect(() => {
    alert("Color was changed")
  }, [color])



  return (
    <div>
      I am a navbar of {color} color.
    </div>
  )
}

export default navbar
