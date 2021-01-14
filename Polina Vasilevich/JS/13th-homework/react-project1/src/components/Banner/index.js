import React from "react";
import "./styles.css";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1 className="banner__title">Web development project</h1>

        <p className="banner__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo eum
          quidem officia, accusamus ullam excepturi nisi temporibus, inventore
          autem iste eos perspiciatis cupiditate adipisci, aspernatur libero
          optio ea dignissimos.
        </p>

        <div className="button banner__button">
          <ul className="list button__list">
            <li className="list__item">Our servies</li>
            <li className="list__item">Hire is now</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Banner;
