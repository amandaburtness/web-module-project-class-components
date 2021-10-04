// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <div className="todo-list-wrapper">
      <div  className="todo-list">
        {props.todoList.map(todo => (
          <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
        ))}
        </div>
      <button className="clear-btn" onClick={() => props.clearCompleted()}>Clear Completed</button>
    </div>
  )
}

export default TodoList