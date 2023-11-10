'use client'
import { useState,useEffect, useCallback } from "react"

export default function Home () {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_ten')
    const data = await response.json()
    setData(data)
  } ;

  useEffect(() => {
    
    getData()
  },[])

  

  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map(joke => (
          <li key={joke.id}>{joke.setup} - {joke.punchline}</li>
        ))}
      </ul>
    </main>
  )
}
