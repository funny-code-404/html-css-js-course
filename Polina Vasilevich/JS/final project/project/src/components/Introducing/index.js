import React from "react";
import BlockText from "../BlockText";
import Button from "../Button";
import "./styles.css";

class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const { items, stl } = this.props;

    return (
      <section>
        <div className="content" style={stl}>
          <BlockText  items={items} />
          <Button buttonIcon={buttonIcon} buttonLabel={buttonLabel} />
        </div>
      </section>
    );
  }
}

export default Introducing;
