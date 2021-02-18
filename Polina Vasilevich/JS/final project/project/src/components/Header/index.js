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
      currentPage: +0,
    };
  }

  handleClick = (e) => {
    this.setState({
      currentIdPage: +e.target.id,
    });
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
          <List
            id="headerList"
            onClick={this.handleClick}
            onChange={console.log(1)}
          >
            {routes.map(({ path, label }, index) => {
              return (
                <ListItem key={path}>
                  <Link
                    id={index}
                    className="link"
                    to={path}
                    style={{ color: "red" }}
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
