import React from "react";
import MainContainer from "../MainContainer";

import { FlexContainer } from "./styles";

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
      ? { justifyContent: "center" }
      : {};
    const stylesAside = !this.state.isVisible ? { display: "none" } : {};
    const contentContainer = (
      <FlexContainer style={stylesMainBlock}>
        <Posts
          items={this.props.items.tweets}
          handleClick={this.handleInvisibleBlock.bind(this)}
          // style={stylesMainBlock}
        />
        <Aside items={this.props.items.asideItems} style={stylesAside} />
      </FlexContainer>
    );
    return <MainContainer contentContainer={contentContainer} />;
  }
}

export default TweetsComponent;
