import React from "react";
import Button from "../Button";
import MainContainer from "../MainContainer";

import { Form, ItemFrom, Select, Option, Info } from "./styles";
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleClick(e) {
    e.preventDefault();

    // fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstParam: this.state.name,
    //     secondParam: this.state.password,
    //   }),
    // });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...this.state,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "GET",
    //   headers: { "Content-type": "application/json;charset=UTF-8" },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err));
  }

  // handleInput = (event) => {
  //   const { value, name } = event.currentTarget;
  //   this.setState(({ data, errors }) => ({
  //     data: {
  //       ...data,
  //       [name]: value,
  //     },
  //     errors: {
  //       ...errors,
  //       [name]: "",
  //     },
  //   }));
  // };

  render() {
    const { input, select, buttonIcon, buttonLabel } = this.props.items;
    const settings = this.props;
    const contentContainer = (
      <Form onChange={this.handleChange}>
        {input.map(({ type, placeholder, name }) => {
          return (
            <ItemFrom
              type={type}
              placeholder={placeholder}
              name={name}
            ></ItemFrom>
          );
        })}
        {select && (
          <Select name={select[0].firstOption}>
            <Option disabled selected hidden value={select[0].firstOption}>
              {select[0].firstOption}
            </Option>
            {select.slice(1).map(({ option }) => (
              <Option value={option}>{option}</Option>
            ))}
          </Select>
        )}

        <Button
          widthButton="30vw"
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          handleButton={this.handleClick.bind(this)}
        />

        <Info>All fields are required</Info>
      </Form>
    );

    return (
      <MainContainer
        isTitle
        items={this.props.items}
        contentContainer={contentContainer}
        {...settings}
      />
    );
  }
}

export default FormComponent;
