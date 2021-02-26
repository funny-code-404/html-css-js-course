import React from "react";

import Posts from "./Posts";
import Aside from "./Aside";
import { InVisible, Tweets } from "./styles";

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
          gridTemplateColumns: "1fr",
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
        <Tweets style={stylesGridBlock}>
          <Posts
            items={this.props.items.tweets}
            handleClick={this.handleInvisibleBlock.bind(this)}
            icon={icon}
            styles={stylesMainBlock}
          />
          <Aside items={this.props.items.asideItems} style={stylesAside} />
        </Tweets>
      </>
    );
  }
}

export default TweetsComponent;
