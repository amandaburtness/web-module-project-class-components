import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  // Toggle Completed 
  toggleCompleted = (todoId) => {
    console.log('toggling', todoId)
    // iterate through the todo array (this.state.todoList) to toggle on the todo in question
    const newTodo = this.state.todoList.map(todo => {
      if (todoId === todo.id) {
        return {
          ...todo, 
          completed: !todo.completed
        }
      }
      else { return todo }
    })
    // update "todoList" state value to this new array
    this.setState({
      ...this.state,
      todoList: newTodo
    })
  }

  // Add Todo
  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    })
  }

  // Remove Completed Todos
  clearCompleted = () => {
    console.log('cleared')
    // if the todo.completed is true, then filter it of the this.state.todoList array 
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => !todo.completed)
    })
  }


  render() {
    return (
      <div className="todo-container">
        <h1>To Do List: </h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList  clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
