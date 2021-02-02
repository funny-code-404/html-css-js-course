import React from "react";

import Section from "../Section";
import { GridContainer } from "../../styles";
import { Photo } from "./styles";

class Photos extends React.Component {
  render() {
    const { items, numberGridColumns } = this.props;
    const { imgs } = this.props.items;

    const contentContainer = (
      <GridContainer numberColumns={numberGridColumns}>
        {imgs.map((img, index) => {
          return (
            <Photo
              key={index}
              style={{ backgroundImage: `url(${img})` }}
            ></Photo>
          );
        })}
      </GridContainer>
    );

    return (
      <Section items={items} paddingLeftRight="0" children={contentContainer} />
    );
  }
}
export default Photos;
