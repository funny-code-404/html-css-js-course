import React from "react";

import { GridContainer } from "../../mainStyles";
import { Img } from "./styles";

export default function Images(props) {
  const { items, settings } = props;

  return (
    <GridContainer {...settings}>
      {items.imgs.map((img, index) => {
        return <Img key={index} backgroundImg={img} {...settings}></Img>;
      })}
    </GridContainer>
  );
}
