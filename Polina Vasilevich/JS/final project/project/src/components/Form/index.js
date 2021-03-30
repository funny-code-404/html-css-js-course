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

  fields = this.props.items.inputs;

  clearForm() {
    const data = {};
    this.fields.map(({ name }) => {
      data[name] = "";
    });

    this.setState({
      data,
    });
  }

  validate() {
    const { data } = this.state;
    let isValid = true;
    const errors = {};

    this.fields.map(({ name }) => {
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

  render() {
    const {
      inputs,
      select,
      textarea,
      buttonIcon,
      buttonLabel,
    } = this.props.items;

    const { settings } = this.props;
    const { errors, isValid, data } = this.state;

    return (
      <MainContainer
        isTitle
        items={this.props.items}
        settings={settings}
        contentContainer={
          <Form
            id={this.props.idForm}
            onChange={this.handleChange}
            {...settings}
          >
            {inputs.map(({ type, placeholder, name, required }, index) => {
              return (
                <>
                  <Input
                    key={`itemForm${index}`}
                    required
                    className={classnames("input", { notValid: errors[name] })}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={data[name]}
                  ></Input>
                  {/* 
                  <span style={{ color: "red" }}>{errors[`${name}`]}</span> */}
                </>
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
              <Textarea
                className="input"
                style={{ height: "201px" }}
              ></Textarea>
            )}

            <Button
              buttonLabel={buttonLabel}
              buttonIcon={buttonIcon}
              handleButton={this.handleSubmit.bind(this)}
              settings={settings}
            />

            <Info
              className="info"
              className={classnames({ notValid: !isValid })}
            >
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
    select: [],
    buttonIcon: "",
    buttonLabel: "",
  },

  idForm: "",
  settings: {},
};

export default FormComponent;
