import React from "react";
import Button from "../Button";
import IconsBoxes from "../IconsBoxes";
import TwoColumnSection from "../TwoColumSection";
import TextList from "../TextList";

class Services extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    const firstGridItem = (
      <>
        <TextList items={leftContent} />
        <Button
          buttonLabel={leftContent.buttonLabel}
          buttonIcon={leftContent.buttonIcon}
        />
      </>
    );

    const secondGridItem = (
      <IconsBoxes
        items={rightContent}
        numberColumns="3"
        positionIcon="center"
        gridGap="240px 0"
      />
    );

    return (
      <TwoColumnSection
        firstGridItem={firstGridItem}
        secondGridItem={secondGridItem}
      />
    );
  }
}

export default Services;
