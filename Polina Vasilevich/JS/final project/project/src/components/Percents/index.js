import React from "react";
import "./styles.css";
class Percents extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(({ title, percents }) => {
          console.log(percents);
          return (
            <>
              <h3>{title}</h3>
              <div className="percentsContainer">
                <div className="percentsItem" style={{ width: percents }}>
                  {" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default Percents;
