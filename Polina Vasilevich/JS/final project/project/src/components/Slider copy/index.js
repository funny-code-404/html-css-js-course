import React from "react";

import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      lastIndex: 4,
      firstIndex: 1,
    };

  }
  
  nextSlider = (e) => {
    e.preventDefault();
    const imgs = document.getElementById(this.id).getElementsByClassName('img1');
  
    

  };

  prevSlider = (e) => {
    e.preventDefault();
    const imgs = document.getElementById(this.id).getElementsByClassName('img1');
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
    const { imgs} = this.props.items;
    const {id, isDots, isArrows} = this.props;
    return (
      <div id={id}>
        <div className="slides1">
          {imgs.map((img, index) => {
            return <img key={index} className="img1" src={img} alt="img" style={{
          transition: 'transform ease-out 450ms', 
          transform: `translateX(-${this.state.position}00%)`
        }}/>;
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
