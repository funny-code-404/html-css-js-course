import React from "react";
import Button from "../Button";
import Title from "../Title";
import ImgAndText from "../ImgAndText";
import { GridContainer } from "../../styles";
import "./styles.css";

class Services extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    return (
      <GridContainer numberColumns="2">
        <div className="leftContent">
          <Title items={leftContent} />
          <ul>
            {leftContent.list.map((item, index) => {
              return (
                <li className="servicesList" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <Button
            buttonLabel={leftContent.buttonLabel}
            buttonIcon={leftContent.buttonIcon}
          />
        </div>
        <div className="rightContent">
          <ImgAndText
            items={rightContent}
            numberColumns="3"
            positionIcon="center"
          />
        </div>
      </GridContainer>
    );
  }
}

export default Services;
