import React from 'react'
import Kitchen from '../Kitchen/Kitchen'
import LivingRoom from '../LivingRoom/LivingRoom'
import Bedroom from '../Bedroom/Bedroom'
import Bath from '../Bath/Bath'
import {useState} from 'react'
import '../style.css'

function FloorPlan() {


  let [state, setState] = useState({

    // useState([]), useState(null), useState()
  // setState({...state, ...newChanges})
  // setState is the method provided by react to modify the existing state
 
  bedNum: ['1','2','3'],
  size: ['Half', 'Full']
  

})

  return (
    <div>
      <Bedroom   bed={state.bedNum[0]} />
      <Kitchen />

      <Bath size={state.size[1]}/>
      <Bedroom bed={state.bedNum[1]}/>

      <LivingRoom />
      <Bath size={state.size[0]}/>

      <Bedroom bed={state.bedNum[2]}/>

    </div>
  )
}

export default FloorPlan