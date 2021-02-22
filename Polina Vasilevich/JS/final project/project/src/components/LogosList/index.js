import { ContentContainer, Logo, FlexContainer } from "./styles";
import MainContainer from "../MainContainer";
import { GridContainer } from "../../mainStyles";

export default function LogosList(props) {
  const { imgs } = props.items;
  const { settings, backgroundImg, isTitle } = props;

  const contentContainer = (
    <GridContainer {...settings}>
      {imgs.map((item, index) => {
        return (
          <ContentContainer key={index}>
            <Logo src={item} alt={item} />
          </ContentContainer>
        );
      })}
    </GridContainer>
  );
  return (
    <MainContainer
      items={props.items}
      contentContainer={contentContainer}
      backgroundImg={backgroundImg}
      settings={settings}
      isTitle={isTitle}
    />
  );
}
