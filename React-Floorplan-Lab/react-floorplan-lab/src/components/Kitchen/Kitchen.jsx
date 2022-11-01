import React from 'react'
import Oven from '../Oven/Oven'
import Sink from '../Sink/Sink'

function Kitchen() {
  return (
    <div className='kitchen'>
      Kitchen
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen