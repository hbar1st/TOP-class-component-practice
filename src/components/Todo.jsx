import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, inputVal: this.props.todo };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleResubmitClick = this.handleResubmitClick.bind(this);
  }

  handleEditClick() {
    this.setState({ editMode: true });
  }
  handleResubmitClick(e, todo, todoIndex, handleResubmit) {
    this.setState({ ...this.state, editMode: false });
    handleResubmit(e, todo, todoIndex);
  }
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  render() {
    const buttonEl = this.state.editMode ? (
      <button
        type="button"
        onClick={(e) =>
          this.handleResubmitClick(
            e,
            this.state.inputVal,
            this.props.index,
            this.props.handleResubmit
          )
        }
      >
        Resubmit
      </button>
    ) : (
      <button type="button" onClick={this.handleEditClick}>
        Edit
      </button>
    );

    return (
      <li key={this.props.todo}>
        {this.state.editMode ? (
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
        ) : (
          this.props.todo
        )}
        {buttonEl}
        <button
          type="button"
          onClick={(e) => this.props.handleDelete(e, this.props.todo)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Todo;
