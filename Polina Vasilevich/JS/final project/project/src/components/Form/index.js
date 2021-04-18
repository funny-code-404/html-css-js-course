import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Button from "../Button";
import MainContainer from "../MainContainer";
import API from "./api";

import { Form, Input, Select, Option, Info, Textarea } from "./styles";

class FormComponent extends React.Component {
  state = {
    data: {},
    errors: {},
    isValid: true,
  };

  clearForm() {
    const data = {};
    [...this.props.items.inputs, this.props.items.select[0]].map(
      ({ type, name }) => {
        if (type === "select") {
          data[name] = this.props.items.select[0].placeholder;
        } else {
          data[name] = "";
        }
      }
    );

    this.setState({
      data,
    });
  }

  validate() {
    const { data } = this.state;
    let isValid = true;
    const errors = {};

    [...this.props.items.inputs, this.props.items.select[0]].map(({ name }) => {
      if (!data[name]) {
        isValid = false;
        errors[name] = `Please enter your ${name}.`;
      }
    });

    this.setState({
      errors,
      isValid,
    });

    return isValid;
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { data } = this.state;
    data[name] = value;
    this.setState({
      data,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...this.state.data,
    };

    if (this.validate()) {
      API.post(`posts`, { data })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));

      this.clearForm();
    }
  };

  deleteErrorsInput = (e) => {
    const { errors } = this.state;
    errors[e.target.name] = "";

    this.setState({
      errors,
    });
  };

  render() {
    const {
      inputs,
      select,
      textarea,
      buttonIcon,
      buttonLabel,
    } = this.props.items;
    const { errors, isValid, data } = this.state;

    return (
      <MainContainer
        isTitle
        items={this.props.items}
        settings={this.props.settings}
        contentContainer={
          <Form
            id={this.props.idForm}
            onChange={this.handleChange}
            {...this.props.settings}
            onFocus={this.deleteErrorsInput}
          >
            {inputs.map(({ type, placeholder, name, required }, index) => {
              return (
                <Input
                  key={`itemForm${index}`}
                  required
                  className={classnames("input", { notValid: errors[name] })}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={data[name]}
                />
              );
            })}
            {select && (
              <Select
                name={select[0].name}
                value={data[select[0].name]}
                className={classnames("input", {
                  notValid: errors[select[0].name],
                })}
              >
                <Option disabled selected hidden value={select[0].placeholder}>
                  {select[0].placeholder}
                </Option>
                {select.slice(1).map(({ option }, index) => (
                  <Option key={`optionForm${index}`} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            )}

            {textarea && (
              <Textarea
                name={textarea.name}
                value={data[textarea.name]}
                className={classnames("input", {
                  notValid: errors[textarea.name],
                })}
                style={{ height: "201px" }}
              ></Textarea>
            )}

            <Button
              buttonLabel={buttonLabel}
              buttonIcon={buttonIcon}
              handleButton={this.handleSubmit.bind(this)}
              settings={this.props.settings}
            />

            <Info className={classnames("info", { notValid: !isValid })}>
              All fields are required
            </Info>
          </Form>
        }
      />
    );
  }
}

FormComponent.propTypes = {
  idForm: PropTypes.string,
  settings: PropTypes.object,
  items: PropTypes.object,
};

FormComponent.defaultProps = {
  items: {
    inputs: [
      {
        type: "",
        placeholder: "",
        name: "",
        required: false,
      },
    ],
    select: [{ name: "", type: "", placeholder: "" }],
    textarea: [{ name: "" }],
    buttonIcon: "",
    buttonLabel: "",
  },

  idForm: "",
  settings: {},
};

export default FormComponent;
