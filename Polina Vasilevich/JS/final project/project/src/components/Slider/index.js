import React from "react";
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
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      currentSliderIndex: 1,
    };
  }

  componentDidMount() {
    this.imgs = document.getElementById(this.id).getElementsByClassName("img");
  }

  setOpacitySlider = (indexInvisible, indexVisible) => {
    this.imgs[indexInvisible].style.opacity = "0";
    this.imgs[indexVisible].style.opacity = "1";
  };

  nextSlider = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if (this.state.currentSliderIndex < this.imgs.length) {
        this.setOpacitySlider(
          prevState.currentSliderIndex - 1,
          prevState.currentSliderIndex
        );
        return { currentSliderIndex: prevState.currentSliderIndex + 1 };
      } else {
        this.setOpacitySlider(this.imgs.length - 1, 0);
        return { currentSliderIndex: 1 };
      }
    });
  };

  prevSlider = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if (this.state.currentSliderIndex > 1) {
        this.setOpacitySlider(
          prevState.currentSliderIndex - 1,
          prevState.currentSliderIndex - 2
        );
        return { currentSliderIndex: prevState.currentSliderIndex - 1 };
      } else {
        this.setOpacitySlider(
          prevState.currentSliderIndex - 1,
          this.imgs.length - 1
        );
        return { currentSliderIndex: this.imgs.length };
      }
    });
  };

  changeSlider = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      this.setOpacitySlider(prevState.currentSliderIndex - 1, e.target.id);
      return { currentSliderIndex: +e.target.id + 1 };
    });
  };

  render() {
    const { imgs, buttonLabel } = this.props.items;
    const {
      id,
      isDots,
      isArrows,
      items,
      isLine,
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
                    key={`img${index}`}
                    backgroundImg={img}
                    id={index}
                    className="img"
                  >
                    <ContentContainer
                      positionContent="center"
                      style={{
                        // width: "50%",
                        position: "absolute",
                        zIndex: "2",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {(items.title || items.subTitle) && (
                        <Typography
                          items={items}
                          // isLine={isLine}
                          settings={{
                            colorTitle: "white",
                            stylesText: `${stylesText}`,
                            fontSizeSubTitle: "30px ",
                            colorSubTitle: "white",
                            colorText: "#fff",
                          }}
                        />
                      )}
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
                  handleButton={(e) => handleLink(e, "blog")}
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
                      key={`dots ${index}`}
                      id={index}
                      className={
                        index + 1 === this.state.currentSliderIndex && "active"
                      }
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

export default Slider;
