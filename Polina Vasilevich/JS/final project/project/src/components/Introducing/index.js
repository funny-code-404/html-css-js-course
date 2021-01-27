import React from "react";
import BlockText from "../BlockText";
import Button from "../Button";

class Introducing extends React.Component {
  render() {
    const { buttonLabel, backgroundImg, buttonIcon } = this.props.items;
    const { items, positionBlock } = this.props;

    return (
      <section>
        <div className={`widthTextContainer ${positionBlock}`}>
          <BlockText items={items} />
          <Button buttonIcon={buttonIcon} buttonLabel={buttonLabel} />
        </div>
      </section>
    );
  }
}

export default Introducing;
