import React from "react";
import { Link } from "react-router-dom";
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

    return (
      <Header>
        <LogoContainer>
          <LogoImg src={logo} alt="" />
          <LogoText>{textLogo}</LogoText>
        </LogoContainer>
        <Navigation>
          <List>
            {routes.map((route) => {
              return (
                <ListItem>
                  <Link className="link" key={route.path} to={route.path}>
                    {route.label}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Navigation>
      </Header>
    );
  }
}

export default HeaderComponent;
