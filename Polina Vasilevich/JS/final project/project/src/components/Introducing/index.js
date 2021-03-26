import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";

import { ContentContainer } from "../../mainStyles";
import { handleLink } from "../Button/handlers";

class Introducing extends React.Component {
  render() {
    const { items, settings, id } = this.props;
    const { buttonLabel, buttonIcon, backgroundImg } = items;

    return (
      <MainContainer
        settings={settings}
        backgroundImg={backgroundImg}
        contentContainer={
          <div id="intro1">
            <ContentContainer {...settings}>
              <Typography items={items} isLine settings={settings} />
              <Button
                buttonIcon={buttonIcon}
                buttonLabel={buttonLabel}
                {...settings}
                handleButton={(e) => handleLink(e, "features")}
              />
            </ContentContainer>
          </div>
        }
      />
    );
  }
}

Introducing.propsTypes = {
  items: PropTypes.array,
  settings: PropTypes.object,
  id: PropTypes.string,
};

Introducing.defaultProps = {
  items: [
    {
      buttonLabel: "",
      buttonIcon: "",
      backgroundImg: "",
    },
  ],
  settings: {},

  id: "",
};

export default Introducing;
