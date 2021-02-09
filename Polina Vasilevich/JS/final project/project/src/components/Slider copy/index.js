import React from "react";

import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      position: 0,
      firstIndex: 0,
      lastIndex: 3,
    };
  }

  nextSlider = (e) => {
    e.preventDefault();
    const imgs = document
      .getElementById(this.id)
      .getElementsByClassName("img1");
    if (this.state.lastIndex < imgs.length - 1) {
      const newPosition =
        this.state.position === imgs.length - 1 ? 0 : this.state.position + 1;
      this.setState((prevState) => {
        return { position: newPosition, lastIndex: prevState.lastIndex + 1 };
      });
    }
  };

  prevSlider = (e) => {
    e.preventDefault();
    const imgs = document
      .getElementById(this.id)
      .getElementsByClassName("img1");
    if (this.state.firstIndex > -1) {
      const newPosition =
        this.state.position === 0 ? imgs.length - 1 : this.state.position - 1;
      this.setState((prevState) => {
        return { position: newPosition, firstIndex: prevState.firstIndex - 1 };
      });
    }
  };

  // changeSlider = (e) => {
  //   e.preventDefault();
  //   const imgs = document.getElementById(this.id).getElementsByClassName('img');
  //   this.setState((prevState) => {
  //     this.setOpacity(imgs, prevState.currentSliderIndex - 1, e.target.id);
  //     return {
  //       currentSliderIndex: +e.target.id + 1,
  //     };
  //   });
  //   console.log(e.target.id);
  // };

  render() {
    const { imgs } = this.props.items;
    const { id, isDots, isArrows } = this.props;
    return (
      <div id={id}>
        <div className="slides1">
          {imgs.map((img, index) => {
            return (
              <img
                key={index}
                className="img1"
                src={img}
                alt="img"
                style={{
                  transition: "transform ease-out 450ms",
                  transform: `translateX(-${this.state.position}00%)`,
                }}
              />
            );
          })}

          {isArrows && (
            <>
              <button className="prev" onClick={this.prevSlider}>
                &#10094;
              </button>
              <button className="next" onClick={this.nextSlider}>
                &#10095;
              </button>
            </>
          )}

          {isDots && (
            <div className="slider-dots">
              {imgs.map((img, index) => {
                return (
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
          )}
        </div>
      </div>
    );
  }
}

export default Slider;
