import React from "react";
import Button from "../Button";
import TextList from "../TextList";
import { ContentContainer } from "./styles";

class TextWithButton extends React.Component {
  render() {
    const { items } = this.props;
    const { buttonLabel, buttonIcon } = this.props.items;
    return (
      <ContentContainer>
        <TextList items={items} />
        <Button
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          widthButton="221px"
        />
      </ContentContainer>
    );
  }
}

export default TextWithButton;
