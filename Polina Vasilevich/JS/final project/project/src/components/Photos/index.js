import React from "react";

import Title from "../Title";
import { GridContainer } from "../../styles";
import { Photo } from "./styles";

class Photos extends React.Component {
  render() {
    const { imgs } = this.props.items;
    const { items, numberGridColumns } = this.props;
    return (
      <div>
        <Title items={items} position="center" />
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
      </div>
    );
  }
}

export default Photos;
