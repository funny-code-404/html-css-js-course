import { FlexContainer } from "../../mainStyles";
import MainContainer from "../MainContainer";
import Typography from "../Typography";

function Numbers(props) {
  const { items } = props;

  const contentContainer = (
    <FlexContainer>
      {items.map((item) => {
        return (
          <div key={item.title}>
            <Typography
              items={item}
              isLine
              settings={{
                widthLine: "31px",
                colorText: "white",
                sizeTitle: "xl",
                colorTitle: `'${item.colorTitle}'`,
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
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColorMainContainer: "#1f252f",
      }}
      contentContainer={contentContainer}
    />
  );
}

export default Numbers;
