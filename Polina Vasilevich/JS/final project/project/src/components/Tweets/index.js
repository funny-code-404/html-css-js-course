import React from "react";

import TwoColumnSection from "../TwoColumSection";

import Posts from "./Posts";
import Aside from "./Aside";

class TweetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  handleInvisibleBlock(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    const { settings } = this.props;
    const stylesMainBlock = !this.state.isVisible
      ? {
          gridTemplateColumns: "80%",
          justifyContent: "center",
        }
      : {};
    const stylesAside = !this.state.isVisible ? { display: "none" } : {};

    const icon = !this.state.isVisible ? "ti-menu" : "ti-shift-right-alt";
    return (
      <TwoColumnSection
        settings={{
          sizeContainers: " 60% 29%",
          gridGap: "11%",
        }}
        style={stylesMainBlock}
        firstItem={
          <Posts
            items={this.props.items.tweets}
            handleClick={this.handleInvisibleBlock.bind(this)}
            icon={icon}
          />
        }
        secondItem={
          <Aside items={this.props.items.asideItems} style={stylesAside} />
        }
      />
    );
  }
}

export default TweetsComponent;
