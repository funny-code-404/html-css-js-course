import React from "react";

import { GridContainer } from "../../mainStyles";
import { Img } from "./styles";
import Typography from "../Typography";

export default function Images(props) {
  const { items, settings } = props;

  return (
    <GridContainer {...settings}>
      {items.imgs.map((item, index) => {
        return (
          <Img key={index} backgroundImg={item.img} {...settings}>
            {item.title && (
              <Typography
                items={item}
                settings={{
                  positionText: "left",
                  sizeTitle: "photos",
                  colorText: "white",
                  setPadding: true,
                  positionText: "bottom",
                }}
              />
            )}
          </Img>
        );
      })}
    </GridContainer>
  );
}
