import React from "react";
import BlockText from "../BlockText";
import IconsList from "../BlockWithIconList";
import Percents from "../Percents";

class Business extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;

    return (
      <section className="flex">
        <div style={{ width: "60%" }}>
          <BlockText items={leftContent} />
          <IconsList items={leftContent.list} />
        </div>

        <div style={{ width: "40%" }}>
          <BlockText items={rightContent} isPositionCenter={true} />
          <Percents items={rightContent.list} />
        </div>
      </section>
    );
  }
}

export default Business;
