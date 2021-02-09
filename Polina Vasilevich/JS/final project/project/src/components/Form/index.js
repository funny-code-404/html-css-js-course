import React from "react";
import { Form, ItemFrom } from "./styles";
class FormComponent extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <Form>
        {items.map(({ type, placeholder }) => {
          return <ItemFrom type={type} placeholder={placeholder}></ItemFrom>;
        })}

        <select>
          <option disabled selected hidden>
            Your Budget
          </option>
          <option>some option1</option>
          <option>some option2</option>
          <option>some option3</option>
        </select>
      </Form>
    );
  }
}

export default FormComponent;
