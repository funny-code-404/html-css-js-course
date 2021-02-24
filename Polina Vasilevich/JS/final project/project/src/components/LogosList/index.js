import PropTypes from "prop-types";
import { ContentContainer, Logo } from "./styles";
import MainContainer from "../MainContainer";
import { GridContainer } from "../../mainStyles";

LogosList.propTypes = {
  items: PropTypes.array,
  settings: PropTypes.object,
  backgroundImg: PropTypes.string,
  isTitle: PropTypes.bool,
};

LogosList.defaultProps = {
  items: [
    {
      imgs: [],
    },
  ],
  settings: {},
  backgroundImg: "",
  isTitle: false,
};

export default function LogosList(props) {
  const { imgs } = props.items;
  const { settings, backgroundImg, isTitle } = props;

  return (
    <MainContainer
      items={props.items}
      backgroundImg={backgroundImg}
      settings={settings}
      isTitle={isTitle}
      contentContainer={
        <GridContainer {...settings}>
          {imgs.map((item, index) => {
            return (
              <ContentContainer key={index}>
                <Logo src={item} alt={item} />
              </ContentContainer>
            );
          })}
        </GridContainer>
      }
    />
  );
}
