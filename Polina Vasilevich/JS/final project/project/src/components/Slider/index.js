import React from "react";

import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      currentSliderIndex: 1,
      selected: 0,
    };

  }
  
  setOpacity = (arr, indexInvisible, indexVisible) => {
    arr[indexInvisible].style.opacity = "0";
    arr[indexVisible].style.opacity = "1";
  };

  nextSlider = (e) => {
    e.preventDefault();
    const imgs = document.getElementById(this.id).getElementsByClassName('img');
    if (this.state.currentSliderIndex < imgs.length) {
      this.setState((prevState) => {
        this.setOpacity(
          imgs,
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
        this.setOpacity(imgs, imgs.length - 1, 0);
        return {
          currentSliderIndex: 1,
          selected: +e.target.id,
        };
      });
    }
  };

  prevSlider = (e) => {
    e.preventDefault();
    const imgs = document.getElementById(this.id).getElementsByClassName('img');
    if (this.state.currentSliderIndex > 1) {
      this.setState((prevState) => {
        this.setOpacity(
          imgs,
          prevState.currentSliderIndex - 1,
          prevState.currentSliderIndex - 2
        );
        return { currentSliderIndex: prevState.currentSliderIndex - 1 };
      });
    } else {
      this.setState((prevState) => {
        this.setOpacity(imgs, prevState.currentSliderIndex - 1, imgs.length - 1);
        return { currentSliderIndex: imgs.length };
      });
    }
  };

  changeSlider = (e) => {
    e.preventDefault();
    const imgs = document.getElementById(this.id).getElementsByClassName('img');
    this.setState((prevState) => {
      this.setOpacity(imgs, prevState.currentSliderIndex - 1, e.target.id);
      return {
        currentSliderIndex: +e.target.id + 1,
      };
    });
    console.log(e.target.id);
  };

  render() {
    const { imgs} = this.props.items;
    const {id, isDots, isArrows} = this.props;
    return (
      <div id={id}>
        <div className="slides">
          {imgs.map((img, index) => {
            return <img key={index} className="img" src={img} alt="img" />;
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
