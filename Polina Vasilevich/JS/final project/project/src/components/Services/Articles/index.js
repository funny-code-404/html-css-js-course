import MainContainer from "../../MainContainer";
import Button from "../../Button";
import IconsList from "../../IconsList";

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
        buttonLabel={items.buttonLabel}
        buttonIcon={items.buttonIcon}
        settings={{ colorButton: "link" }}
      />
    </>
  );
  return (
    <MainContainer
      settings={{ positionText: "left", paddingLeftRight: "small" }}
      isTitle
      items={items}
      contentContainer={contentContainer}
    />
  );
}
