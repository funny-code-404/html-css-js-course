import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import MainContainer from "../MainContainer";
import { FlexContainer } from "../../mainStyles";
import { Icon, Img, IconContainer } from "../Icon/styles";
import Typography from "../Typography";
import { Text } from "../Typography/styles";

import {
  FooterColumnsContainer,
  FooterColumn,
  CopyRightIconsContainer,
  CopyRightIcon,
  FooterIconsButton,
} from "./styles";

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
    };
  }

  handleShowIcons = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ showIcons: !prevState.showIcons }));
  };

  render() {
    const { logo, contacts, copyRight } = this.props.items;
    const { showIcons } = this.state;
    return (
      <footer id="footer">
        <MainContainer
          settings={{
            backgroundColorMainContainer: "footer",
            heightMainContainer: "footer",
            stylesBlock: "callTo",
          }}
          contentContainer={
            <FlexContainer heightFlexContainer="footer">
              <FooterColumnsContainer mediaGridBlock="footer">
                <FooterColumn
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IconContainer>
                    <Img
                      backgroundImg={logo.imgLogo}
                      heightImg="38px"
                      widthImg="80px"
                    />
                  </IconContainer>

                  <Typography
                    items={logo}
                    settings={{ stylesText: "footerLogo" }}
                  />
                </FooterColumn>

                {contacts.map((item, index) => {
                  return (
                    <FooterColumn>
                      <Typography
                        key={`copyRight${index}`}
                        items={item}
                        settings={{
                          stylesText: "footer",
                          gridGap: "1.3vw",
                        }}
                      />
                    </FooterColumn>
                  );
                })}
              </FooterColumnsContainer>
            </FlexContainer>
          }
        />

        <MainContainer
          settings={{
            backgroundColorMainContainer: "copyRight",
            stylesBlock: "callTo",
          }}
          contentContainer={
            <FlexContainer
              heightFlexContainer="header"
              style={{ position: "relative" }}
              mediaFlexBlock="footer"
            >
              <Text>{copyRight.text}</Text>

              <FooterIconsButton onClick={this.handleShowIcons}>
                <i className="ti-angle-double-down"></i>
              </FooterIconsButton>
              <CopyRightIconsContainer
                className={classnames("hideIcons", {
                  showIcons: showIcons,
                })}
              >
                {copyRight.icons.map(({ icon, href }) => {
                  return (
                    <CopyRightIcon>
                      <a
                        key={href}
                        href={href}
                        style={{ textDecoration: "none" }}
                      >
                        <Icon className={icon} stylesIcon="footer"></Icon>
                      </a>
                    </CopyRightIcon>
                  );
                })}
              </CopyRightIconsContainer>
            </FlexContainer>
          }
        />
      </footer>
    );
  }
}

FooterComponent.propTypes = {
  items: PropTypes.array,
};

FooterComponent.defaultProps = {
  items: [
    {
      logo: {},
      contacts: [
        {
          title: "",
          text: "",
        },
      ],
      copyRight: {},
    },
  ],
};

export default FooterComponent;
