import React from "react";

import TwoColumnSection from "../TwoColumSection";

import Posts from "./Posts";
import Aside from "./Aside";
import { InVisible } from "./styles";
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
          // gridTemplateColumns: "80%",
          justifyContent: "center",
        }
      : {};
    const stylesAside = !this.state.isVisible ? { display: "none" } : {};

    // const icon = !this.state.isVisible ? "ti-menu" : "ti-shift-right-alt";

    const icon = !this.state.isVisible ? (
      <i className="ti-menu"></i>
    ) : (
      <InVisible />
    );

    return (
      <TwoColumnSection
        settings={{
          paddingLeftRight: "none",
          paddingTop: "0",
          paddingBottom: "0",

          sizeContainers: "55% 40%",
          gridGap: "6.5%",
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
