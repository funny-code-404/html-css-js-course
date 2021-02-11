import MainContainer from "../MainContainer";
import Button from "../Button";
import { Text } from "./styles";
import { FlexContainer } from "../../mainStyles";

function CallToAction(props) {
  const { text, buttonLabel, settings } = props;
  const contentContainer = (
    <FlexContainer>
      <Text>{text}</Text>
      <Button buttonLabel={buttonLabel} settings={settings}></Button>
    </FlexContainer>
  );

  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}

export default CallToAction;
