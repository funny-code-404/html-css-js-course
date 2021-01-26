import React from "react";

import "./styles.css";

class Icon extends React.Component {
  render() {
    const { icon, img, title, text } = this.props.items;
    const { classIcon, classContainer } = this.props;
    return (
      <div className="iconContainer" className={classContainer}>
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <div>
            <i className={`icon ${icon} ${classIcon}`}></i>
          </div>
        )}
        <div>
          <h2 className="iconTitle">{title}</h2>
          <p className="iconText">{text}</p>
        </div>
      </div>
    );
  }
}

export default Icon;
