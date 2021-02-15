import React from "react";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";

import { ContentContainer } from "../../mainStyles";
import { handleLink } from "../Button/handlers";
class Introducing extends React.Component {
  render() {
    const { buttonLabel, buttonIcon, backgroundImg } = this.props.items;
    const { items, settings } = this.props;

    const contentContainer = (
      <ContentContainer {...settings}>
        <Typography items={items} isLine settings={settings} />
        <Button
          buttonIcon={buttonIcon}
          buttonLabel={buttonLabel}
          {...settings}
          handleButton={handleLink}
          link="features"
        />
      </ContentContainer>
    );

    return (
      <MainContainer
        settings={settings}
        backgroundImg={backgroundImg}
        contentContainer={contentContainer}
      />
    );
  }
}

export default Introducing;
