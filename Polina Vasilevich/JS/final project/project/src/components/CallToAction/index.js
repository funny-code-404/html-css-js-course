import Button from "../Button";
import { Container, Text, FlexContainer } from "./styles";

function CallToAction(props) {
  const { text, buttonLabel } = props;
  return (
    <Container>
      <FlexContainer>
        <Text>{text}</Text>
        <Button buttonLabel={buttonLabel}></Button>
      </FlexContainer>
    </Container>
  );
}

export default CallToAction;
