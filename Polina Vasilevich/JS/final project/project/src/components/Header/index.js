import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import MainContainer from "../MainContainer";
import { FlexContainer } from "../../mainStyles";

import {
  Header,
  List,
  ListItem,
  LogoContainer,
  LogoImg,
  LogoText,
  Navigation,
} from "./styles";

import "./styles.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageId: 0,
    };
  }

  handleClick = (e) => {
    this.setState({
      currentPageId: +e.target.id,
    });
  };

  handleChange = (e) => {
    this.setState({
      currentPageId: +e.target.id,
    });
  };

  setStylesNavigation = (condition) => {
    return condition ? { color: "#4285F4" } : {};
  };

  render() {
    const { routes, logoImg, logoText } = this.props;

    const contentContainer = (
      <FlexContainer heightFlexContainer="header">
        <LogoContainer>
          <LogoImg src={logoImg} alt={logoImg} />
          <LogoText>{logoText}</LogoText>
        </LogoContainer>
        <Navigation>
          <List id="headerList" onClick={this.handleClick}>
            {routes.map(({ path, label }, index) => {
              const styles = this.setStylesNavigation(
                window.location.pathname === path
              );
              return (
                <ListItem key={path}>
                  <Link
                    id={index}
                    className="headerLink"
                    style={styles}
                    to={path}
                    onChange={this.handleChange}
                  >
                    {label}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Navigation>
      </FlexContainer>
    );

    return (
      <Header>
        <MainContainer
          contentContainer={contentContainer}
          settings={{
            stylesBlock: "callTo",
          }}
        />
      </Header>
    );
  }
}

HeaderComponent.propsType = {
  routes: PropTypes.array,
  logoImg: PropTypes.string,
  logoText: PropTypes.string,
};

HeaderComponent.defaultProps = {
  routes: [
    {
      path: "",
      label: "",
    },
  ],
  logoImg: "",
  logoText: "",
};

export default HeaderComponent;
