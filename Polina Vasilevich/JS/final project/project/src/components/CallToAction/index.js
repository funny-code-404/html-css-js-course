import Button from "../Button";
import { Container, Text, FlexContainer } from "./styles";
import { Wrapper } from "../../styles";

function CallToAction(props) {
  const { text, buttonLabel } = props;
  return (
    <Container>
      <Wrapper>
        <FlexContainer>
          <Text>{text}</Text>
          <Button
            buttonLabel={buttonLabel}
            backgroundColor="#82b440"
            borderColor="#fff"
          ></Button>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
}

export default CallToAction;
