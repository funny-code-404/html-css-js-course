import { FlexContainer } from "../../mainStyles";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";

Numbers.propTypes = {
  items: PropTypes.array,
};

Numbers.defaultProps = {
  items: [
    {
      title: "",
      colorTitle: "",
    },
  ],
};

export default function Numbers(props) {
  const { items } = props;
  return (
    <MainContainer
      settings={{
        stylesBlock: "numbers",
        backgroundColorMainContainer: "dark",
        mediaFlexBlock: "numbers",
      }}
      contentContainer={
        <FlexContainer heightFlexContainer="numbers" mediaFlexBlock="numbers">
          {items.map((item) => {
            return (
              <div key={item.title}>
                <Typography
                  items={item}
                  isLine
                  settings={{
                    widthLine: "31px",
                    stylesText: "numbers",
                    multicoloredTitle: item.colorTitle,
                  }}
                />
              </div>
            );
          })}
        </FlexContainer>
      }
    />
  );
}
