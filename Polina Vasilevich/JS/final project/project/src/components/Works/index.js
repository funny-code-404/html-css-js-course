import MainContainer from "../MainContainer";
import Typography from "../Typography";
import { ContentContainer } from "../../mainStyles";
import Button from "../Button";

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
