import MainContainer from "../../MainContainer";
import Typography from "../../Typography";
import Button from "../../Button";
import { ContentContainer } from "../../../mainStyles";
export default function TextList(props) {
  const { items, settings } = props;
  console.log({ ...settings });
  const contentContainer = (
    <ContentContainer {...settings}>
      <Typography items={items} isLine settings={settings} />
      {items.buttonLabel && <Button {...items} />}
    </ContentContainer>
  );
  return (
    <MainContainer contentContainer={contentContainer} settings={settings} />
  );
}
