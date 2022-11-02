import React from 'react'

function Score(props) {
  return (
    <div>
        <h4>Results</h4>
        <p>{props.students.score}</p>
        <p>{props.students.date}</p>
    </div>
  )
}

export default Score