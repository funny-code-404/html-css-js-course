import React from "react";

import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      position: 0,
      imgs: props.items.imgs,
      currentSliderIndex: 3,
    };
  }

  nextSlider = (e) => {
    e.preventDefault();
    const imgs = this.state.imgs;

    const newPosition =
      this.state.position > imgs.length - 1 ? 0 : this.state.position + 1;

    this.setState((prevState) => {
      return { position: newPosition };
    });

    console.log(this.state.position);
  };

  prevSlider = (e) => {
    e.preventDefault();
    const imgs = this.state.imgs;

    const newPosition =
      this.state.position === 0 ? imgs.length - 1 : this.state.position - 1;

    this.setState((prevState) => {
      return { position: newPosition };
    });
  };

  render() {
    const { imgs } = this.props.items;
    const { id, isDots, isArrows } = this.props;
    return (
      <div id={id}>
        <div className="slides1">
          {imgs.map((img, index) => {
            let dx = null;

            if (this.state.position <= index) {
              dx = -100 * this.state.position;
            } else {
              dx = 100 * (imgs.length - this.state.position);
            }

            return (
              <img
                key={`slider${index}`}
                className="img1"
                src={img}
                alt="img"
                style={{
                  transition: "transition: 0.3s ease-in-out",
                  transform: `translateX(${dx}%)`,
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
                    key={`dotsSlider${index}`}
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
