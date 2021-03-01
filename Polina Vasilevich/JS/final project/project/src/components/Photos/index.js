import React from "react";
import PropTypes from "prop-types";

import { GridContainer } from "../../mainStyles";
import { Img, Wrapper, ButtonsContainer, Container } from "./styles";
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
      <Container {...settings}>
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
                    key={`portfolio ${index}`}
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
              <Img
                key={`portfolioItems${index}`}
                backgroundImg={item.img}
                {...settings}
              >
                {item.title && (
                  <Typography
                    items={item}
                    settings={{
                      stylesText: "photos",
                      setPadding: true,
                    }}
                  />
                )}
              </Img>
            );
          })}
        </GridContainer>
      </Container>
    );
  }
}

ImagesList.propTypes = {
  items: PropTypes.object,
  settings: PropTypes.object,
};

ImagesList.defaultProps = {
  items: { imgs: [], buttons: "" },
  settings: {},
};

export default ImagesList;
