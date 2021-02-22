import React from "react";
import { Link } from "react-router-dom";

import MainContainer from "../MainContainer";
import { FlexContainer, GridContainer } from "../../mainStyles";

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
    // const newLink = document.getElementById(e.target.id);
    // this.setState((prevState) => {
    //   if (this.state.currentIdPage === e.target.id) {
    //     newLink.classList.add("active");
    //   }
    // });

    this.setState({
      currentPageId: +e.target.id,
    });
    console.dir(window.location.pathname);
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
    const { routes, logo, textLogo } = this.props;

    const contentContainer = (
      <FlexContainer heightFlexContainer="header">
        <LogoContainer>
          <LogoImg src={logo} alt={logo} />
          <LogoText>{textLogo}</LogoText>
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
                    className="link"
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
            paddingTop: "0",
            paddingBottom: "0",
          }}
        />
      </Header>
    );
  }
}

export default HeaderComponent;
