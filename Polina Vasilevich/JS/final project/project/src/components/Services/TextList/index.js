import PropTypes from "prop-types";
import MainContainer from "../../MainContainer";
import Typography from "../../Typography";
import Button from "../../Button";
import { ContentContainer } from "../../../mainStyles";

TextList.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
};

TextList.defaultProps = {
  items: {
    title: "",
    subTitle: "",
    text: "",
    textList: {
      icon: "",
      text: [],
    },

    buttonLabel: "",
    buttonIcon: "",
  },
};

export default function TextList(props) {
  const { items, settings } = props;

  return (
    <MainContainer
      settings={settings}
      backgroundImg={items.backgroundImg}
      contentContainer={
        <ContentContainer {...settings}>
          <Typography items={items} isLine settings={settings} />
          {items.buttonLabel && <Button {...items} />}
        </ContentContainer>
      }
    />
  );
}
