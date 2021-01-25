import React from "react";
import TitleText from "../BlockWithTitleText";
import "./styles.css";

class Partners extends React.Component {
  render() {
    const { list } = this.props.items;
    const { items } = this.props;
    return (
      <section>
        <TitleText items={items} />
        <div className=" flexContainer positionCenter">
          {list.map((item) => {
            return (
              <div className="logoContainer">
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Partners;
