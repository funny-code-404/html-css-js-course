import React from "react";
import "./styles.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.imgs = document.getElementsByClassName("img");
    this.dots = document.getElementsByClassName('slider-dots_item');
    this.state = {
      currentSliderIndex: 1,
      selected: 0,
    };
  }

  
  setOpacity = (indexInvisible, indexVisible) => {
    this.imgs[indexInvisible].style.opacity = "0";
    this.imgs[indexVisible].style.opacity = "1";

  }


  nextSlider = (e) => {
    e.preventDefault();
    if (this.state.currentSliderIndex < this.imgs.length) {
      this.setState(prevState => {
          this.setOpacity(prevState.currentSliderIndex - 1, prevState.currentSliderIndex )
          return {currentSliderIndex: prevState.currentSliderIndex + 1,
                  selected: +e.target.id};
      });

    } else {
          this.setState(prevState => {
            this.setOpacity(this.imgs.length - 1, 0)
            return {currentSliderIndex: 1,
            selected: +e.target.id};
      });
    }

  };

  prevSlider = (e) => {
    e.preventDefault();
      if (this.state.currentSliderIndex > 1) {
        this.setState(prevState => {
            this.setOpacity(prevState.currentSliderIndex - 1, prevState.currentSliderIndex - 2);
            return {currentSliderIndex: prevState.currentSliderIndex - 1};
        });

      } else {
            this.setState(prevState => {
              this.setOpacity(prevState.currentSliderIndex - 1, this.imgs.length - 1);
              return {currentSliderIndex: 1};
        });
      }
  };


  changeSlider = (e) => {
    e.preventDefault();
    this.setState(prevState => {
            this.imgs[prevState.currentSliderIndex - 1].style.display = "none";
            this.imgs[e.target.id].style.display = "block";
            
            // this.dots[prevState.currentSliderIndex - 1].classList.remove('active');
            // this.dots[e.target.id].classList.add('active');
            return {currentSliderIndex: +e.target.id + 1,
                    selected: +e.target.id}
        });
  }

  render() {
    const { imgs } = this.props.items;
    return (
      <section>
        <div id="slider">
          <div id='imgs'></div>
          <div id='dots'></div>
          {imgs.map((img, index) => {
            const imgsContainer = document.getElementById('imgs');
            const dotsContainer = document.getElementById('dots');
            console.dir(imgsContainer);
            // imgsContainer.appendChild(<img key={img} className='img' src={img} alt="img" />)
            // dotsContainer.appendChild(<input type='radio' id={index} checked={this.state.selected === 1} onChange={this.changeSlider}/>)
          })};

          <button className="prev" onClick={this.prevSlider}>
            &#10094;
          </button>

          <button className="next" onClick={this.nextSlider}>
            &#10095;
          </button>

        </div>
      </section>
    );
  }
}

export default Slider;
