import MainContainer from "../MainContainer";
import Button from "../Button";
import { Text } from "./styles";
import { FlexContainer } from "../../mainStyles";
import { handleLink } from "../Button/handlers";
function CallToAction(props) {
  const { text, buttonLabel, settings } = props;
  const contentContainer = (
    <FlexContainer heightFlexContainer="callTo">
      <Text>{text}</Text>
      <Button
        buttonLabel={buttonLabel}
        settings={settings}
        handleButton={handleLink}
        link="blog"
      ></Button>
    </FlexContainer>
  );

  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}

export default CallToAction;
