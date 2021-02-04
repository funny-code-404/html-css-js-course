import MainContainer from "../MainContainer";
import Button from "../Button";
import { Text } from "./styles";
import { FlexContainer } from "../../mainStyles";

function CallToAction(props) {
  const {
    text,
    buttonLabel,
    backgroundColorMainContainer,
    backgroundColorButton,
    borderColorButton,
    paddingTop,
    paddingBottom,
  } = props;

  const contentContainer = (
    <FlexContainer>
      <Text>{text}</Text>
      <Button
        buttonLabel={buttonLabel}
        backgroundColor={backgroundColorButton}
        borderColor={borderColorButton}
      ></Button>
    </FlexContainer>
  );

  return (
    <MainContainer
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      backgroundColorMainContainer={backgroundColorMainContainer}
      contentContainer={contentContainer}
    />
  );
}

export default CallToAction;
