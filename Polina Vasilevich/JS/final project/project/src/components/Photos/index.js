import React from "react";

import { GridContainer } from "../../mainStyles";
import { Img } from "./styles";

export default function Images(props) {
  const {gridGap, widthItemGridContainer} = props;
  const {imgs} = props.items;
  return (
    <GridContainer gridGap={gridGap} widthItemGridContainer={widthItemGridContainer}>
      {imgs.map((img, index) => {
            return (
              <Img
                key={index}
                backgroundImg={img}
              ></Img>
            );
          })}
    </GridContainer>
  )

}

