import React from "react";
import Posts from "./Posts";
import Aside from "./Aside";
import { Tweets, ButtonAside } from "./styles";

class TweetsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  handleInvisibleBlock(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  }

  render() {
    const { settings } = this.props;
    const condition = !this.state.hidden;

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

    const styleAside = !condition
      ? {
          visibility: "hidden",
          opacity: "0",
          position: "fixed",
        }
      : {};

    return (
      <>
        <Tweets style={stylesGridBlock}>
          <Posts items={this.props.items.tweets} styles={stylesMainBlock} />
          {!condition && (
            <ButtonAside onClick={this.handleInvisibleBlock.bind(this)}>
              <i className="ti-menu"></i>
            </ButtonAside>
          )}
          <Aside
            items={this.props.items.asideItems}
            style={styleAside}
            handleClick={this.handleInvisibleBlock.bind(this)}
          />
        </Tweets>
      </>
    );
  }
}

export default TweetsComponent;
