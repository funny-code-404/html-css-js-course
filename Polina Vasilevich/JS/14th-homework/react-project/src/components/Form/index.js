import React, { Component } from "react";

import List from "../List";

import {
  Section,
  InputContainer,
  InputTaskName,
  ButtonAddTask,
  ButtonContainer,
  TaskContainer,
  Error,
} from "./styles";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
      isValid: true,
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
      const { tasks } = this.state;
      tasks.push(this.state.value);

      this.setState({
        tasks: tasks,
        value: "",
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
      });
    }
  };

  deleteItem(index) {
    const { tasks } = this.state;
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks,
    });
  }

  renderList() {
    const { tasks } = this.state;
    return (
      <List>
        {tasks.map((task, index) => (
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
    const colorInput = this.state.isValid ? "#cacaca" : "red";
    return (
      <Section>
        <InputContainer>
          <InputTaskName
            type="text"
            value={this.state.value}
            placeholder="Enter task..."
            onChange={this.handleChange}
            style={{ borderColor: colorInput }}
          />
          <ButtonContainer>
            <ButtonAddTask onClick={this.addTask}>Add task</ButtonAddTask>
          </ButtonContainer>
        </InputContainer>

        <Error>
          {this.state.isValid ? "" : "Please, fill out this field."}
        </Error>

        <TaskContainer>{this.renderList()}</TaskContainer>
      </Section>
    );
  }
}

export default Form;
