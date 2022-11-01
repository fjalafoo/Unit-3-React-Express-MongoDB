import React from 'react'
import './Student.css'

function Student(props) {

    console.log('This is the students props! ', props)

  return (
    <div>
     <h3> {props.name}</h3>
      <p>{props.bio}</p>
      {props.scores.map(s =>
      <>
        <div key={s.date}>{s.date}</div>
        <div key={s.date}>{s.score}</div>
      </> 
        )}
    </div>
  )
}

export default Student