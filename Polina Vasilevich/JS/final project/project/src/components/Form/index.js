import React from "react";
import Button from "../Button";
import MainContainer from "../MainContainer";

import { Form, ItemFrom, Select, Option, Info } from "./styles";
class FormComponent extends React.Component {
  render() {
    const { input, select, buttonIcon, buttonLabel } = this.props.items;
    const settings = this.props;

    const contentContainer = (
      <Form>
        {input.map(({ type, placeholder }) => {
          return <ItemFrom type={type} placeholder={placeholder}></ItemFrom>;
        })}

        {select && (
          <Select>
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
