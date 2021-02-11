import MainContainer from "../../MainContainer";
import Typography from "../../Typography";
import Button from "../../Button";

export default function TextList(props) {
  const { items, settings } = props;

  const contentContainer = (
    <>
      <Typography
        items={items}
        isLine
        settings={{
          positionText: "left",
          colorTitle: "white",
          colorSubTitle: "white",
          colorText: "white",
        }}
      />
      <Button {...items} />
    </>
  );
  return (
    <MainContainer contentContainer={contentContainer} settings={settings} />
  );
}
