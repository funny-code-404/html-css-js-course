import React from "react";
import TitleAndText from "../BlockWithTitleAndText";
import "./styles.css";
class Percents extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <TitleAndText items={items} />
        {items.map(({ title, percents }) => {
          return (
            <>
              <h3>{title}</h3>
              <div className="percentsContainer">
                <div className="percentsItem" style={{ width: percents }}></div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default Percents;
