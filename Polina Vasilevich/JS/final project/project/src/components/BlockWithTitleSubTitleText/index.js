import React from "react";
import Line from "../Line";
import "./styles.css";

class TitleSubTitleText extends React.Component {
  render() {
    const { title, subTitle, text } = this.props.items;
    return (
      <div>
        <h2 className="sectionBigTitle">{title}</h2>
        <Line />
        <p className="sectionBigSubTitle">{subTitle}</p>
        <p className="sectionBigText">{text}</p>
      </div>
    );
  }
}

export default TitleSubTitleText;
