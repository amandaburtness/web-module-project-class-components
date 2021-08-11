import React from 'react'

const Todo = (props) => {

  return (
    <div onClick={() => props.toggleFinish(props.todo.id)} className={`todo${props.todo.finished ? ' finished' : ''}`}>
      <p>{props.todo.task}</p>
    </div>
  )
}

export default Todo;