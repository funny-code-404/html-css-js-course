import React from "react";
import BlockText from "../BlockText";
import IconsList from "../BlockWithIconList";
import Percents from "../Percents";

import "./styles.css";

class Business extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;

    return (
      <section className="gridWithDifferentColumns">
        <div>
          <BlockText items={leftContent} />
          <IconsList
            items={leftContent.list}
            styleGridContainer="twoColumnsGrid"
            styleImg="imgContainerSize"
            section="withoutPadding"
          />
        </div>

        <div>
          <BlockText items={rightContent} />
          <Percents items={rightContent.list} />
        </div>
      </section>
    );
  }
}

export default Business;
