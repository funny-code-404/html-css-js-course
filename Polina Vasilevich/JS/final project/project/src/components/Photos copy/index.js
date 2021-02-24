import React from "react";

import { GridContainer } from "../../mainStyles";
import { Img, Wrapper, ButtonsContainer } from "./styles";
import Typography from "../Typography";
import Button from "../Button";

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgList: 0,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      currentImgList: +e.target.id,
    });
  };

  render() {
    const { imgs, buttons } = this.props.items;
    const { settings } = this.props;
    return (
      <>
        {buttons && (
          <ButtonsContainer onClick={this.handleClick}>
            {buttons.map((button, index) => {
              const styles =
                this.state.currentImgList === index
                  ? { borderTopColor: "#4285f4" }
                  : {};

              return (
                <Wrapper style={styles}>
                  <Button
                    onClick={this.handleClick}
                    key={index}
                    id={index}
                    settings={{ stylesButton: "portfolio" }}
                    buttonLabel={button}
                  ></Button>
                </Wrapper>
              );
            })}
          </ButtonsContainer>
        )}
        <GridContainer {...settings}>
          {imgs[this.state.currentImgList].map((item, index) => {
            return (
              <Img key={index} backgroundImg={item} {...settings}>
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
      </>
    );
  }
}
export default ImagesList;
