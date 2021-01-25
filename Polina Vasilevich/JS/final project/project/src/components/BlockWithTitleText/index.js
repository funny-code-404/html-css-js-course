import React from "react";
import Line from "../Line";

class TitleText extends React.Component {
  render() {
    const { text, title } = this.props.items;

    return (
      <div className="textContainer">
        <h2 className="sectionTitle">{title}</h2>
        <Line />
        <p className="sectionText">{text}</p>
      </div>
    );
  }
}

export default TitleText;
