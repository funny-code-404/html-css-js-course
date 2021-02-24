import MainContainer from "../../MainContainer";
import Button from "../../Button";
import IconsList from "../../IconsList";
import { handleLink } from "../../Button/handlers";
export default function Articles(props) {
  const { items, settings } = props;
  const contentContainer = (
    <>
      <IconsList
        items={items.list}
        settings={{ heightImg: "290px", positionText: "left" }}
        deletePadding
      />
      <Button
        handleButton={handleLink}
        link="features"
        buttonLabel={items.buttonLabel}
        buttonIcon={items.buttonIcon}
        settings={{ stylesButton: "link", colorTextButton: "blue" }}
      />
    </>
  );
  return (
    <MainContainer
      settings={{
        positionText: "left",
        paddingLeftRight: "small",
        ...settings,
      }}
      isTitle
      items={items}
      contentContainer={contentContainer}
    />
  );
}
