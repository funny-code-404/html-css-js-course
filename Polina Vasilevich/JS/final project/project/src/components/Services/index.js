import React from "react";
import Button from "../Button";
import BlockText from "../BlockText";
import IconsList from "../BlockWithIconList";
import "./styles.css";

class Services extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    return (
      <section className="flexContainer">
        <div className="leftContent">
          <BlockText items={leftContent} />
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
          <IconsList
            items={rightContent}
            styleGridContainer="threeColumnsGrid positionCenter"
            
          />
        </div>
      </section>
    );
  }
}

export default Services;
