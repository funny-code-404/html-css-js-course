import MainContainer from "../MainContainer";
import Typography from "../Typography";
import { ContentContainer } from "../../mainStyles";
import Button from "../Button";

export default function Works(props) {
  const { settings } = props;

  const contentContainer = (
    <ContentContainer positionContent="center">
      <Typography items={props.items} isLine />
      <Button
        buttonLabel={props.items.buttonLabel}
        buttonIcon={props.items.buttonIcon}
        settings={{ colorButton: "green" }}
      />
    </ContentContainer>
  );
  return (
    <MainContainer
      settings={{
        backgroundColorMainContainer: "copyRight",
      }}
      contentContainer={contentContainer}
    />
    // <ContentContainer>
    //   <TextContainer>
    //     <Title color="#fff">{title}</Title>
    //     <Line></Line>
    //     <SubTitle color="">{subTitle}</SubTitle>
    //     <Button
    //       backgroundColor="#82B440"
    //       borderColor="#82B440"
    //       buttonLabel={buttonLabel}
    //       buttonIcon={buttonIcon}
    //     />
    //   </TextContainer>
    // </ContentContainer>
  );
}
