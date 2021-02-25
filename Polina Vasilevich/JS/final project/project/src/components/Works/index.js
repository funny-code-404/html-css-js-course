import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import { ContentContainer } from "../../mainStyles";
import Button from "../Button";

Works.propTypes = {
  items: PropTypes.object,
};

Works.defaultProps = {
  items: {
    buttonLabel: "",
    buttonIcon: "",
  },
};

export default function Works(props) {
  return (
    <MainContainer
      settings={{
        backgroundColorMainContainer: "copyRight",
      }}
      contentContainer={
        <ContentContainer positionContent="center">
          <Typography
            settings={{ stylesText: "work" }}
            items={props.items}
            isLine
          />
          <Button
            buttonLabel={props.items.buttonLabel}
            buttonIcon={props.items.buttonIcon}
            settings={{ stylesButton: "work" }}
          />
        </ContentContainer>
      }
    />
  );
}
