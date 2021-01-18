import React, { Component } from "react";

import List from "../List";

import {
  Section,
  InputContainer,
  InputTaskName,
  ButtonAddTask,
  ButtonContainer,
  TaskContainer,
} from "./styles";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      value: "",
      isValid: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    if (this.state.value) {
      const taskArray = this.state.tasks;
      taskArray.push(this.state.value);

      this.setState({
        tasks: taskArray,
        value: "",
      });
    }
  };

  deleteItem = function (index) {
    this.state.tasks.splice(index, 1);
    this.setState({ tasks: this.state.tasks });
  };

  renderList() {
    const taskList = this.state.tasks;
    return (
      <List>
        {taskList.map((task, index) => (
          <List.Item
            key={index}
            task={task}
            handleClick={this.deleteItem.bind(this, index)}
          />
        ))}
      </List>
    );
  }

  render() {
    return (
      <Section>
        <InputContainer>
          <InputTaskName
            type="text"
            value={this.state.value}
            placeholder="Enter task..."
            onChange={this.handleChange}
          />
          <ButtonContainer>
            <ButtonAddTask onClick={this.addTask}>Add task</ButtonAddTask>
          </ButtonContainer>
        </InputContainer>

        <TaskContainer>{this.renderList()}</TaskContainer>
      </Section>
    );
  }
}

export default Form;
