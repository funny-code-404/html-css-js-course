import { GridTwoColumnContainer } from "./styles";
import MainContainer from "../MainContainer";

export default function TwoColumnSection(props) {
  const { settings, style } = props;
  const contentContainer = (
    <GridTwoColumnContainer {...settings} style={style}>
      <div>{props.firstItem}</div>
      <div>{props.secondItem}</div>
    </GridTwoColumnContainer>
  );
  return (
    <MainContainer settings={settings} contentContainer={contentContainer} />
  );
}
