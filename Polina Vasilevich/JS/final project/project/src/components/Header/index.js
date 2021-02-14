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
  render() {
    const { routes, logo, textLogo } = this.props;

    const contentContainer = (
      <FlexContainer heightFlexContainer="header">
        <LogoContainer>
          <LogoImg src={logo} alt={logo} />
          <LogoText>{textLogo}</LogoText>
        </LogoContainer>
        <Navigation>
          <List>
            {routes.map(({ path, label }) => {
              return (
                <ListItem key={path}>
                  <Link className="link" to={path}>
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
