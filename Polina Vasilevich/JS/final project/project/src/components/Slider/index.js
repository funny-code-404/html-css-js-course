import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import {
  SlidersContainer,
  Img,
  ArrowNext,
  ArrowPrev,
  DotsContainer,
  Dot,
  ButtonsContainer,
} from "./styles";

import { ContentContainer } from "../../mainStyles";
import Typography from "../Typography";
import MainContainer from "../MainContainer";
import Button from "../Button";
import { handleScrollDown, handleLink } from "../Button/handlers";

class Slider extends React.Component {
  state = { currentSliderIndex: 1 };

  setCurrentSliderIndex = (sliderIndex) => {
    this.setState((prevState) => ({
      ...prevState,
      currentSliderIndex: sliderIndex,
    }));
  };

  nextSlider = () => {
    const { currentSliderIndex } = this.state;
    const sliderIndex =
      currentSliderIndex === this.props.items.imgs.length
        ? 1
        : currentSliderIndex + 1;
    this.setCurrentSliderIndex(sliderIndex);
  };

  prevSlider = () => {
    const { currentSliderIndex } = this.state;
    const sliderIndex =
      currentSliderIndex === 1
        ? this.props.items.imgs.length
        : currentSliderIndex - 1;
    this.setCurrentSliderIndex(sliderIndex);
  };

  changeSlider = (e) => {
    this.setState({
      currentSliderIndex: +e.target.id + 1,
    });
  };

  render() {
    const { imgs, buttonLabel } = this.props.items;
    const { currentSliderIndex } = this.state;
    const {
      id,
      isDots,
      isArrows,
      items,
      stylesText,
      heightSliderContainer,
    } = this.props;

    return (
      <MainContainer
        settings={{
          stylesBlock: "withoutPadding",
        }}
        contentContainer={
          <SlidersContainer
            id={id}
            heightSliderContainer={heightSliderContainer}
          >
            {imgs.map((img, index) => {
              return (
                <>
                  <Img
                    key={`img${index}${id}`}
                    backgroundImg={img}
                    id={index}
                    className={classnames("img", {
                      opacity: !(currentSliderIndex === index + 1),
                    })}
                  >
                    <ContentContainer
                      positionContent="center"
                      style={{
                        position: "absolute",
                        zIndex: "2",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div style={{ width: "70%" }}>
                        {(items.title || items.subTitle) && (
                          <Typography
                            items={items}
                            settings={{
                              colorTitle: "white",
                              stylesText: `${stylesText}`,
                              fontSizeSubTitle: "30px ",
                              colorSubTitle: "white",
                              colorText: "#fff",
                            }}
                          />
                        )}
                      </div>
                    </ContentContainer>
                  </Img>
                </>
              );
            })}

            {buttonLabel && (
              <ButtonsContainer>
                <Button
                  buttonLabel={buttonLabel[0]}
                  settings={{
                    stylesButton: "sliderTransparent",
                  }}
                  handleButton={handleScrollDown}
                  link="intro1"
                />
                <Button
                  buttonLabel={buttonLabel[1]}
                  settings={{
                    stylesButton: "sliderTransparent",
                  }}
                  handleButton={(e) => handleLink(e, "shop")}
                />
              </ButtonsContainer>
            )}

            {isArrows && (
              <>
                <ArrowPrev onClick={this.prevSlider}>&#10094;</ArrowPrev>
                <ArrowNext onClick={this.nextSlider}>&#10095;</ArrowNext>
              </>
            )}

            {isDots && (
              <DotsContainer>
                {imgs.map((img, index) => {
                  return (
                    <Dot
                      key={`dots${index}${id}`}
                      id={index}
                      className={classnames({
                        active: index + 1 === this.state.currentSliderIndex,
                      })}
                      onClick={this.changeSlider}
                    ></Dot>
                  );
                })}
              </DotsContainer>
            )}
          </SlidersContainer>
        }
      />
    );
  }
}

Slider.propTypes = {
  id: PropTypes.string,
  isDots: PropTypes.bool,
  isArrows: PropTypes.bool,
  items: PropTypes.object,
  stylesText: PropTypes.string,
  heightSliderContainer: PropTypes.string,
};

Slider.defaulfProps = {
  id: "",
  isDots: false,
  isArrows: false,
  items: {
    imgs: [],
    buttonLabel: [],
  },
  stylesText: "",
  heightSliderContainer: "",
};

export default Slider;
