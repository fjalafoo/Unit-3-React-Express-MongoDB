import React from 'react'

function Bedroom(props) {
  return (
    <div className='bedroom' id={`bed-${props.bed}`}>
      Bedroom {props.bed}
    
    </div>
  )
}

export default Bedroom