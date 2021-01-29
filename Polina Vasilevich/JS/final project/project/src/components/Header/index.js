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
  FlexContainer,
} from "./styles";

import { Wrapper } from "../../styles";

import "./styles.css";

class HeaderComponent extends React.Component {
  render() {
    const { routes, logo, textLogo } = this.props;

    return (
      <Header>
        <Wrapper>
          <FlexContainer>
            <LogoContainer>
              <LogoImg src={logo} alt="" />
              <LogoText>{textLogo}</LogoText>
            </LogoContainer>
            <Navigation>
              <List>
                {routes.map(({ path, label }) => {
                  return (
                    <ListItem>
                      <Link className="link" key={path} to={path}>
                        {label}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </Navigation>
          </FlexContainer>
        </Wrapper>
      </Header>
    );
  }
}

export default HeaderComponent;
