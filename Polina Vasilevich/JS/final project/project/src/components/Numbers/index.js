import { FlexContainer } from "../../mainStyles";
import MainContainer from "../MainContainer";
import Typography from "../Typography";

function Numbers(props) {
  const { items } = props;

  const contentContainer = (
    <FlexContainer heightFlexContainer="numbers">
      {items.map((item) => {
        return (
          <div key={item.title}>
            <Typography
              items={item}
              isLine
              settings={{
                widthLine: "31px",
                colorText: "white",
                stylesText: "numbers",
                multicoloredTitle: item.colorTitle,
              }}
            />
          </div>
        );
      })}
    </FlexContainer>
  );
  return (
    <MainContainer
      settings={{
        paddingLeftRight: "small",
        paddingTop: "0",
        paddingBottom: "0",
        backgroundColorMainContainer: "dark",
        mediaFlexBlock: "numbers",
      }}
      contentContainer={contentContainer}
    />
  );
}

export default Numbers;
