import PropTypes from "prop-types";
import { GridTwoColumnContainer, GridItem } from "./styles";
import MainContainer from "../MainContainer";

TwoColumnSection.propTypes = {
  settings: PropTypes.object,
  styles: PropTypes.object,
  firstItem: PropTypes.object,
  secondItem: PropTypes.object,
};

TwoColumnSection.defaultProps = {
  settings: {},
  styles: {},
  firstItem: {},
  secondItem: {},
};

export default function TwoColumnSection({
  settings,
  styles,
  firstItem,
  secondItem,
}) {
  return (
    <MainContainer
      settings={settings}
      contentContainer={
        <GridTwoColumnContainer {...settings} style={styles}>
          <GridItem {...settings}>{firstItem}</GridItem>
          <GridItem {...settings}>{secondItem}</GridItem>
        </GridTwoColumnContainer>
      }
    />
  );
}
