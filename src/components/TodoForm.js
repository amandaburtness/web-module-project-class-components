import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      todo: e.target.value
    })
  }

  // class property to submit form
  submitTodo = e => {
    e.preventDefault();
    this.setState({todo: ''})
    this.props.addTodo(this.state.todo)
  }

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input 
          type="text" 
          name="todo" 
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm