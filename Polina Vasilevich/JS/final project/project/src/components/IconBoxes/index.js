import React from "react";

import "../../assets/fonts/themify-icons.css";
import "./styles.css";

class IconBoxes extends React.Component {
  render() {
    const { icons } = this.props;

    return (
      <section className="icons">
        {icons.map((item) => {
          return (
            <div className="iconContainer">
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="iconTitle">{item.title}</h3>
              <p className="iconText">{item.text}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default IconBoxes;
