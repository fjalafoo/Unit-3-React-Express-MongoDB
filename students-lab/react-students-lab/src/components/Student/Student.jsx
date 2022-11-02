import React from 'react'
import Score from '../Score/Score'

function Student(props) {
  return (
    <div>
      

        <h3>Name: {props.students.name}</h3>
        <p>{props.students.bio}</p>
        {props.students.scores.map(st => <Score students={st}/>)}

    </div>
  )
}

export default Student