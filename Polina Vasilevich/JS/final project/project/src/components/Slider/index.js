import React from "react";
import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.imgs = document.getElementsByClassName("img");
    this.state = {
      currentSliderIndex: 1,
    };
  }

  nextSlider = (e) => {
    e.preventDefault();

    if (this.state.currentSliderIndex < this.imgs.length) {
      this.setState(
        {
          currentSliderIndex: this.state.currentSliderIndex + 1,
        },
        () => {
          this.imgs[this.state.currentSliderIndex - 2].style.display = "none";
          this.imgs[this.state.currentSliderIndex - 1].style.display = "block";
        }
      );
    } else {
      this.setState(
        {
          currentSliderIndex: 1,
        },
        () => {
          this.imgs[this.imgs.length - 1].style.display = "none";
          this.imgs[this.state.currentSliderIndex - 1].style.display = "block";
        }
      );
    }
  };

  prevSlider = () => {
    if (this.state.currentSlider > 1) {
      this.setState((prevState) => ({
        currentSlider: prevState.currentSlider - 1,
      }));
    } else {
      this.setState({
        currentSlider: this.state.imgs.length,
      });
    }
    console.log(this.state.currentSlider);
  };

  render() {
    const { imgs } = this.props.items;
    return (
      <section>
        <div id="sliders">
          {imgs.map((img) => {
            return <img className="img" src={img} alt="1" />;
          })}
          <button className="prev" onClick={this.prevSlider}>
            &#10094;
          </button>
          <button className="next" onClick={this.nextSlider}>
            &#10095;
          </button>
          <div className="slider-dots">
            <span className="slider-dots_item" onclick=""></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
