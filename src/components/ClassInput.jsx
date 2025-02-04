/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Count from "./Count.jsx";
import Todo from "./Todo.jsx";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleResubmit(e, todo, todoIndex) {
    console.log(todo, todoIndex);
    this.setState((state) => ({
      ...state,
      todos: this.state.todos.map((t, index) => {
        if (index == todoIndex) {
          return todo;
        } else {
          return t;
        }
      }),
    }));
  }
  handleDelete(e, todo) {
    let newObj = {
      ...this.state,
      todos: this.state.todos.filter((t) => t !== todo),
    };
    this.setState(newObj);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <Count todos={this.state.todos} />
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo
              todo={todo}
              key={todo}
              index={index}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleResubmit={this.handleResubmit}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
