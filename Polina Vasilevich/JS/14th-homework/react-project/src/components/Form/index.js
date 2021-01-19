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
    if(this.state.value) {
      const tasks = this.state.tasks;
      tasks.push(this.state.value);

      this.setState(
        {
          tasks: tasks,
          value: "",
          isValid: true,
        }
      )
    } else {
      this.setState({
        isValid: false,
      })
    }
  }

  deleteItem(index) {
    const taskArray = this.state.tasks;
    taskArray.splice(index, 1);
    
    this.setState({ 
      tasks: taskArray,
    });
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
    const colorInput = this.state.isValid ? '#cacaca' : 'red';
    return (
      <Section>
        <InputContainer>
          <InputTaskName
            type="text"
            value={this.state.value}
            placeholder="Enter task..."
            onChange={this.handleChange}
            style = {{borderColor: colorInput}}
          />
          <ButtonContainer>
            <ButtonAddTask onClick={this.addTask}>Add task</ButtonAddTask>
          </ButtonContainer>
        </InputContainer>

        <Error>
         {this.state.isValid ? '' : 'Please, fill out this field.'}
        </Error>

        <TaskContainer>{this.renderList()}</TaskContainer>
      </Section>
    );
  }
}

export default Form;
