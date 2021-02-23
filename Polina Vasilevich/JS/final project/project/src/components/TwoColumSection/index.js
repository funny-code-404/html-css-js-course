import { GridTwoColumnContainer, GridItem } from "./styles";
import MainContainer from "../MainContainer";

export default function TwoColumnSection(props) {
  const { settings, styles } = props;
  const contentContainer = (
    <GridTwoColumnContainer {...settings} style={styles}>
      <GridItem {...settings}>{props.firstItem}</GridItem>
      <GridItem {...settings}>{props.secondItem}</GridItem>
    </GridTwoColumnContainer>
  );
  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}
