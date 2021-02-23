import React from "react";

import TwoColumnSection from "../TwoColumSection";

import Posts from "./Posts";
import Aside from "./Aside";
import { InVisible } from "./styles";
class TweetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
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
    const condition = !this.state.isVisible;
    const stylesGridBlock = !condition
      ? {
          gridTemplateColumns: "100%",
          justifyContent: "center",
        }
      : {};

    const stylesMainBlock = !condition
      ? {
          paddingTop: "50px",
          paddingLeft: "11%",
          paddingRight: "11%",
        }
      : {};
    const stylesAside = !condition ? { opacity: "0" } : {};

    const icon = !condition ? <i className="ti-menu"></i> : <InVisible />;

    return (
      <>
        <TwoColumnSection
          settings={{
            paddingLeftRight: "none",
            paddingTop: "0",
            paddingBottom: "0",

            sizeContainers: "55% 40%",
            gridGap: "6.5%",
          }}
          styles={stylesGridBlock}
          firstItem={
            <Posts
              items={this.props.items.tweets}
              handleClick={this.handleInvisibleBlock.bind(this)}
              icon={icon}
              styles={stylesMainBlock}
            />
          }
          secondItem={
            <Aside items={this.props.items.asideItems} style={stylesAside} />
          }
        />
      </>
    );
  }
}

export default TweetsComponent;
