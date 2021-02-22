import { GridTwoColumnContainer, GridItem } from "./styles";
import MainContainer from "../MainContainer";

export default function TwoColumnSection(props) {
  const { settings, style } = props;
  const contentContainer = (
    <GridTwoColumnContainer {...settings} style={style}>
      <GridItem {...settings}>{props.firstItem}</GridItem>
      <GridItem {...settings}>{props.secondItem}</GridItem>
    </GridTwoColumnContainer>
  );
  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}
