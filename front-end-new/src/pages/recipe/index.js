import React from 'react'
import "./index.css"

export default function Recipe() {
  return (
    <div>
      <h1>Recipy name</h1>
      <hr className='recipy'/>
      <div className='flex'>
        <img src=""></img>
        <p>ingreadients</p>
      </div>
      <hr className='recipy'/>
      <p>instructions</p>
    </div>
  )
}