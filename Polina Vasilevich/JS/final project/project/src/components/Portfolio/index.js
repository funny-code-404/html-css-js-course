import React from "react";
import "./styles.css";
import BlockText from "../BlockText";

class Portfolio extends React.Component {
  render() {
    const { imgs } = this.props.items;
    const { items, style } = this.props;
    return (
      <section style={{ padding: style }}>
        <div className="contentPortfolio">
          <BlockText items={items} classContainer="textContainer" />
          <div className="imgContainer">
            {imgs.map((img, index) => {
              return (
                <div
                  key={index}
                  className="img"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
