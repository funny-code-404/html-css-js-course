import { ContentContainer, Logo, FlexContainer } from "./styles";
import MainContainer from "../MainContainer";

export default function LogosList(props) {
  const { imgs } = props.items;
  const { oneString, settings, backgroundImg } = props;

  const contentContainer = (
    <FlexContainer oneString={oneString}>
      {imgs.map((item, index) => {
        return (
          <ContentContainer key={index}>
            <Logo src={item} alt={item} />
          </ContentContainer>
        );
      })}
    </FlexContainer>
  );
  return (
    <MainContainer
      isTitle
      items={props.items}
      isVerticalCenter
      contentContainer={contentContainer}
      backgroundImg={backgroundImg}
      settings={settings}
    />
  );
}
