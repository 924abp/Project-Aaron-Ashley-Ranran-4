import React from 'react'
import "./index.css"
import CardList from '../../components/CardList'

export default function Home() {
  return (
    <div>
      <h1>Recipe App</h1>
      {/* add search bar if there is time */}
      <CardList/>
    </div>
  )
}
