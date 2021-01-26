import React from "react";
import BlockText from '../BlockText';
import "./styles.css";

class Partners extends React.Component {
  render() {
    const { list } = this.props.items;
    const { items } = this.props;
    return (
      <section>
        <BlockText items={items}/>
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
