import React from "react";
import Button from "../Button";
import TitleSubTitleText from "../BlockWithTitleSubTitleText";

import "./styles.css";

class Services extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    return (
      <section className="flexContainer">
        <div className="leftContent">
          <TitleSubTitleText items={leftContent} />
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
        <div className="rightContent flexContainer">
          {rightContent.map((item) => {
            return (
              <div className="iconsContainer">
                <img src={item.icon} alt={item.title} />
                <h3 className="iconTitle">{item.title}</h3>
                <p className="iconText">{item.text}</p>
                <button></button>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
