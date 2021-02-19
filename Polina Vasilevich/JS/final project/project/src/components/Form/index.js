import React from "react";
import axios from "axios";

import Button from "../Button";
import MainContainer from "../MainContainer";

import { Form, ItemFrom, Select, Option, Info } from "./styles";
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.idForm;
    this.state = { isValid: false };
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  componentDidMount() {
    this.inputs = document
      .getElementById(this.id)
      .getElementsByClassName("input");
  }

  clearForm = () => {
    Array.prototype.forEach.call(this.inputs, (input) => {
      if (input.value) {
        input.value = "";
        this.setState((prevState) => ({
          ...prevState,
          [input.name]: "",
        }));
      }
    });
  };

  // validateForm = () => {
  //   const notFilledInputs = Array.prototype.filter.call(
  //     this.inputs,
  //     (input) => input.required && !input.value
  //   );

  //   const isValid = notFilledInputs.length ? false : true;

  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       isValid: isValid,
  //     };
  //   });
  // };

  handleClick(e) {
    e.preventDefault();

    const notFilledInputs = Array.prototype.filter.call(
      this.inputs,
      (input) => input.required && !input.value
    );

    const isValid = notFilledInputs.length ? false : true;

    this.inputs.map((input) => input.classList.remove("notValid"));
    if (isValid) {
      this.clearForm();
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          data: { ...this.state },
        })
        .then((response) => {
          console.log("Request succeeded with JSON response", response.data);
        })
        .catch((e) => console.log(e));
    } else {
      notFilledInputs.map((input) => input.classList.add("notValid"));
    }
  }

  // e.preventDefault();
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     ...this.state,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Request succeeded with JSON response", data);
  //   })
  //   .catch((error) => {
  //     console.log("Request failed", error);
  //   });

  // Array.prototype.forEach.call(inputs, (input) => {
  //   if (input.name === "name" || input.name === "name") {
  //     input.value = "";
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       [input.name]: "",
  //     }));
  //   }
  // });

  // handleSubmit = (event) => {
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", {
  //       data: { ...this.state },
  //     })
  //     .then((r) => console.log(r))
  //     .catch((e) => console.log(e));

  //   event.preventDefault();
  // };

  //   // fetch("https://jsonplaceholder.typicode.com/todos/1", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({
  //   //     firstParam: this.state.name,
  //   //     secondParam: this.state.password,
  //   //   }),
  //   // });

  //   // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   //   method: "GET",
  //   //   headers: { "Content-type": "application/json;charset=UTF-8" },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((json) => console.log(json))
  //   //   .catch((err) => console.log(err));
  // }

  // // handleInput = (event) => {
  // //   const { value, name } = event.currentTarget;
  // //   this.setState(({ data, errors }) => ({
  // //     data: {
  // //       ...data,
  // //       [name]: value,
  // //     },
  // //     errors: {
  // //       ...errors,
  // //       [name]: "",
  // //     },
  // //   }));
  // // };

  render() {
    const { inputs, select, buttonIcon, buttonLabel } = this.props.items;
    const { settings } = this.props;
    const contentContainer = (
      <Form id={this.props.idForm} onChange={this.handleChange} {...settings}>
        {inputs.map(({ type, placeholder, name, required }) => {
          return (
            <ItemFrom
              required={required}
              className="input"
              type={type}
              placeholder={placeholder}
              name={name}
            ></ItemFrom>
          );
        })}
        {select && (
          <Select name={select[0].firstOption} className="input">
            <Option disabled selected hidden value={select[0].firstOption}>
              {select[0].firstOption}
            </Option>
            {select.slice(1).map(({ option }) => (
              <Option value={option}>{option}</Option>
            ))}
          </Select>
        )}

        <Button
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          handleButton={this.handleClick.bind(this)}
          settings={settings}
        />

        <Info>All fields are required</Info>
        <span style={{ display: "none" }}>Error</span>
      </Form>
    );

    return (
      <MainContainer
        isTitle
        items={this.props.items}
        contentContainer={contentContainer}
        settings={settings}
      />
    );
  }
}

export default FormComponent;
