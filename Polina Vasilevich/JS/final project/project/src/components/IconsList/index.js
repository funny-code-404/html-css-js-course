import React from "react";

import { Wrapper } from "../../styles";
import IconsBoxes from "../../components/IconsBoxes";

class IconsList extends React.Component {
  render() {
    const { paddingTopBottom } = this.props;
    return (
      <section>
        <Wrapper paddingTopBottom={paddingTopBottom}>
          <IconsBoxes {...this.props} />
        </Wrapper>
      </section>
    );
  }
}

export default IconsList;
