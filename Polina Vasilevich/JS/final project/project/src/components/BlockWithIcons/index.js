import React from "react";

import "./styles.css";

class IconBoxes extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <section className="flexContainer">
        {items.map((item) => {
          return (
            <div className="icnContainer positionCenter" key={item.title}>
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
