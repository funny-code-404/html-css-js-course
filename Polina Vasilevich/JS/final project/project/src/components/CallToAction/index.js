import Button from "../Button";
import { Container, Text, FlexContainer } from "./styles";
import { Wrapper } from "../../styles";

function CallToAction(props) {
  const { text, buttonLabel, backgroundColorContainer, backgroundColorButton, borderColorButton } = props;
  return (
    <Container backgroundColor={backgroundColorContainer}>
      <Wrapper>
        <FlexContainer>
          <Text>{text}</Text>
          <Button
            buttonLabel={buttonLabel}
            backgroundColor={backgroundColorButton}
            borderColor={borderColorButton}
          ></Button>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
}

export default CallToAction;
