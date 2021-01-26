import React from "react";
import Line from "../Line";
import "./styles.css";

class BlockText extends React.Component {
  render() {
    const { title, subTitle, text } = this.props.items;
    const { isNotVisible, classContainer, isPositionCenter } = this.props;

    const positionTitle = isPositionCenter ? "positionCenterTitle" : "";
    return (
      <div className={`${classContainer} ${positionTitle}`}>
        <h2 className="sectionBigTitle">{title}</h2>
        {!isNotVisible && <Line />}
        <p className="sectionBigSubTitle">{subTitle}</p>
        <p className="sectionBigText">{text}</p>
      </div>
    );
  }
}

export default BlockText;
