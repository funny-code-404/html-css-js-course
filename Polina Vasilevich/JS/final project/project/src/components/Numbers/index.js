// import { Title, Text, Line } from "./styles";
import { FlexContainer } from "../../mainStyles";
import MainContainer from "../MainContainer";
import Text from "../Text";

function Numbers(props) {
  const { items } = props;

  const contentContainer = (
    <FlexContainer>
      {items.map((item) => {
        return (
          <div key={item.title}>
            <Text
              items={item}
              isLine
              widthLine="31px"
              colorTitle={item.colorTitle}
              fontSizeTitle="lg"
              colorText="#fff"
            />
          </div>
        );
      })}
    </FlexContainer>
  );
  return (
    <MainContainer
      paddingLeftRight="small"
      paddingTop="20px"
      paddingBottom="20px"
      contentContainer={contentContainer}
      backgroundColorMainContainer="#1f252f"
    />
  );
}

export default Numbers;
