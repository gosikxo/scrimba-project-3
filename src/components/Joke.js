import React from 'react'

const Joke = ({setup, punchline}) => {
  return (
    <div>
        {setup && <h2>{setup}</h2>}
        <h3>{punchline}</h3>
        <hr />
    </div>
  )
}

export default Joke