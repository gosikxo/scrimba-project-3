import React from 'react'

const Joke = ({setup, punchline}) => {
  return (
    <div>
        <h2>{setup}</h2>
        <h3>{punchline}</h3>
    </div>
  )
}

export default Joke