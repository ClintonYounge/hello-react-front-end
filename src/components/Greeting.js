import React from 'react'
import { useSelector } from 'react-redux'

const Greeting = () => {
  const {greetings, loading} = useSelector((store) => store.greetings)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <h1 key={greetings.id}>
      {greetings.greeting}
    </h1>
  )
}

export default Greeting