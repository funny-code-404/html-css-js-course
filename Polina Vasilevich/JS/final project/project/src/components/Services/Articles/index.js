import PropTypes from "prop-types";
import MainContainer from "../../MainContainer";
import Button from "../../Button";
import IconsList from "../../IconsList";
import { handleLink } from "../../Button/handlers";

Articles.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
};

Articles.defaultProps = {
  items: {
    title: "",
    subTitle: "",
    buttonLabel: "",
    buttonIcon: "",
    list: [
      {
        img: "",
        title: "",
        text: "",
      },
    ],
  },
};

export default function Articles(props) {
  const { items, settings } = props;

  return (
    <MainContainer
      settings={{
        positionText: "left",
        paddingLeftRight: "small",
        ...settings,
      }}
      isTitle
      items={items}
      contentContainer={
        <>
          <IconsList
            items={items.list}
            settings={{
              heightImg: "290px",
              positionText: "left",
              widthItemGridContainer: "350px",
            }}
            deletePadding
          />
          <Button
            handleButton={(e) => handleLink(e, "features")}
            buttonLabel={items.buttonLabel}
            buttonIcon={items.buttonIcon}
            settings={{ stylesButton: "link", colorTextButton: "linkBlue" }}
          />
        </>
      }
    />
  );
}
