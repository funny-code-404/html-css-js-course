import { ContentContainer, Logo, FlexContainer } from "./styles";
import MainContainer from "../MainContainer";

export default function LogosList(props) {
  const { imgs } = props.items;
  const { oneString, settings } = props;

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
    <MainContainer contentContainer={contentContainer} settings={settings} />
  );
}
