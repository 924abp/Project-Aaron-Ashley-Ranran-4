import {useState, useEffect } from 'react'
import "./index.css"
import CardList from '../../components/CardList'
import apiConn from '../../apinew/conn'

export default function Home() {
  const [recipyList, setRecipyList] = useState([])
  const [er, setEr] = useState('')

  const getRecipys = async () => {
    try {
      const response = await apiConn.get("/recipe")
      setEr(` error: ${response.data}`)
      setRecipyList(response.data)
    } catch (error) {
      setEr(` error: ${error.message} ${error}`)
    }
  }

  useEffect(() => {
    getRecipys()
  }, [])

  return (
    <div>
      <h1>Recipe App {er}</h1>
      {/* add search bar if there is time */}
      <CardList recipyList={recipyList}/>
    </div>
  )
}
