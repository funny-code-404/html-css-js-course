import React from "react";

import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.imgs = document.getElementsByClassName("img");
    this.dots = document.getElementsByClassName("slider-dots_item");
    this.state = {
      currentSliderIndex: 1,
      selected: 0,
    };
  }

  setOpacity = (indexInvisible, indexVisible) => {
    this.imgs[indexInvisible].style.opacity = "0";
    this.imgs[indexVisible].style.opacity = "1";
  };

  nextSlider = (e) => {
    e.preventDefault();
    if (this.state.currentSliderIndex < this.imgs.length) {
      this.setState((prevState) => {
        this.setOpacity(
          prevState.currentSliderIndex - 1,
          prevState.currentSliderIndex
        );
        return {
          currentSliderIndex: prevState.currentSliderIndex + 1,
          selected: +e.target.id,
        };
      });
    } else {
      this.setState((prevState) => {
        this.setOpacity(this.imgs.length - 1, 0);
        return {
          currentSliderIndex: 1,
          selected: +e.target.id,
        };
      });
    }
  };

  prevSlider = (e) => {
    e.preventDefault();
    if (this.state.currentSliderIndex > 1) {
      this.setState((prevState) => {
        this.setOpacity(
          prevState.currentSliderIndex - 1,
          prevState.currentSliderIndex - 2
        );
        return { currentSliderIndex: prevState.currentSliderIndex - 1 };
      });
    } else {
      this.setState((prevState) => {
        this.setOpacity(prevState.currentSliderIndex - 1, this.imgs.length - 1);
        return { currentSliderIndex: this.imgs.length };
      });
    }
  };

  changeSlider = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      this.setOpacity(prevState.currentSliderIndex - 1, e.target.id);
      return {
        currentSliderIndex: +e.target.id + 1,
      };
    });
    console.log(e.target.id);
  };

  render() {
    const { imgs } = this.props.items;
    return (
      <div>
        <div className="slides">
          {imgs.map((img, index) => {
            return <img key={index} className="img" src={img} alt="img" />;
          })}

          <button className="prev" onClick={this.prevSlider}>
            &#10094;
          </button>
          <button className="next" onClick={this.nextSlider}>
            &#10095;
          </button>
        </div>

        <div className="slider-dots">
          {imgs.map((img, index) => {
            return (
              // <input
              //   className="slider-dots_item"
              //   type="radio"
              //   value={`img${index}`}
              //   id={index}
              //   checked={index + 1 === this.state.currentSliderIndex}
              //   onChange={this.changeSlider}
              // />
              <button
                id={index}
                className={`slider-dots_item ${
                  index + 1 === this.state.currentSliderIndex && "active"
                } `}
                onClick={this.changeSlider}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
