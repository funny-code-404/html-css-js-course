import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import { ContentContainer, FlexContainer } from "../../mainStyles";
import Button from "../Button";
import { handleLink } from "../Button/handlers";

Works.propTypes = {
  items: PropTypes.object,
};

Works.defaultProps = {
  items: {
    buttonLabel: "",
    buttonIcon: "",
  },
};

export default function Works({ items }) {
  return (
    <MainContainer
      settings={{
        backgroundColorMainContainer: "copyRight",
        heightMainContainer: "work",
        stylesBlock: "callTo",
      }}
      contentContainer={
        <FlexContainer heightFlexContainer="work">
          <ContentContainer positionContent="center">
            <Typography
              settings={{ stylesText: "work" }}
              items={items}
              isLine
            />
            <Button
              buttonLabel={items.buttonLabel}
              buttonIcon={items.buttonIcon}
              handleButton={(e) => handleLink(e, "shortcodes")}
              settings={{ stylesButton: "work" }}
            />
          </ContentContainer>
        </FlexContainer>
      }
    />
  );
}
