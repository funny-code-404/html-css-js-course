import React from "react";
import "./styles.css";
import TitleText from "../BlockWithTitleText";

class Portfolio extends React.Component {
  render() {
    const { imgs } = this.props.items;
    const { items } = this.props;
    return (
      <section>
        <div className="contentPortfolio">
          <TitleText items={items} />
          <div className="imgContainer">
            {imgs.map((img, index) => {
              return (
                <div key={index} className="img">
                  {img}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
