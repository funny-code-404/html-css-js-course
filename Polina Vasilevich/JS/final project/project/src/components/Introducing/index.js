import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";

import { ContentContainer } from "../../mainStyles";
import { handleLink } from "../Button/handlers";

export default function Introducing({ items, settings }) {
  return (
    <MainContainer
      settings={settings}
      backgroundImg={items.backgroundImg}
      contentContainer={
        <div id="intro1">
          <ContentContainer {...settings}>
            <Typography items={items} isLine settings={settings} />
            <Button
              buttonIcon={items.buttonIcon}
              buttonLabel={items.buttonLabel}
              {...settings}
              handleButton={(e) => handleLink(e, "features")}
            />
          </ContentContainer>
        </div>
      }
    />
  );
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
