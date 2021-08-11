import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTask)
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state, 
      newTask: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          name="todoitem"
          value={this.state.newTask}
          onChange={this.handleChanges}
          />
          <button>Add New Todo Item!</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;