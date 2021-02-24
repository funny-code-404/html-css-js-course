import React from "react";
import axios from "axios";

import Button from "../Button";
import MainContainer from "../MainContainer";
import { Form, ItemFrom, Select, Option, Info, Textarea } from "./styles";
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.idForm;
    this.state = { isValid: true, data: [] };
  }

  handleChange = (e) => {
    e.target.classList.remove("notValid");
    const { value, name } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      data: { ...this.state.data, [name]: value },
    }));
  };

  clearForm = () => {
    const inputs = document
      .getElementById(this.id)
      .getElementsByClassName("input");

    Array.prototype.forEach.call(inputs, (input) => {
      if (input.value && input.tagName === "INPUT") {
        input.value = "";
        this.setState((prevState) => ({
          ...prevState,
          [input.name]: "",
        }));
      }

      if (input.value && input.tagName === "SELECT") {
        input.value = input[0].value;
        this.setState((prevState) => ({
          ...prevState,
          [input.name]: input[0].value,
        }));
      }
    });
  };

  validateForm = () => {
    const inputs = document
      .getElementById(this.id)
      .getElementsByClassName("input");
    let isValid = true;
    Array.prototype.filter.call(inputs, (input) => {
      if (
        ((input.tagName === "INPUT" || input.tagName === "TEXTAREA") &&
          !input.value) ||
        (input.tagName === "SELECT" && input.value === input[0].value)
      ) {
        input.classList.add("notValid");
        isValid = false;
      } else {
        input.classList.remove("notValid");
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      isValid: isValid,
    }));

    return isValid;
  };

  handleClick(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.clearForm();
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          data: { ...this.state.data },
        })
        .then((response) => {
          console.log("Request succeeded with JSON response", response.data);
        })
        .catch((e) => console.log(e));
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

  render() {
    const {
      inputs,
      select,
      textarea,
      buttonIcon,
      buttonLabel,
    } = this.props.items;
    const { settings } = this.props;

    const contentContainer = (
      <Form id={this.props.idForm} onChange={this.handleChange} {...settings}>
        {inputs.map(({ type, placeholder, name, required }) => {
          return (
            <ItemFrom
              required
              className="input"
              type={type}
              placeholder={placeholder}
              name={name}
            ></ItemFrom>
          );
        })}
        {select && (
          <Select name={select[0].firstOption} className="input" required>
            <Option disabled selected hidden value={select[0].firstOption}>
              {select[0].firstOption}
            </Option>
            {select.slice(1).map(({ option }) => (
              <Option value={option}>{option}</Option>
            ))}
          </Select>
        )}

        {textarea && (
          <Textarea className="input" style={{ height: "201px" }}></Textarea>
        )}

        <Button
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          handleButton={this.handleClick.bind(this)}
          settings={settings}
        />

        {!this.state.isValid ? (
          <Info className="info" style={{ color: "red" }}>
            All fields are required
          </Info>
        ) : (
          <Info className="info">All fields are required</Info>
        )}

        {/* {!this.state.isValid && (
          <Text className="error" style={{ color: "red" }}>
            Fill in required fields!
          </Text>
        )} */}
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
