import React from "react";
import PropTypes from "prop-types";

import MainContainer from "../MainContainer";
import { GridContainer, FlexContainer, GridItem } from "../../mainStyles";
import { Icon, Img, IconContainer } from "../Icon/styles";
import Typography from "../Typography";

class FooterComponent extends React.Component {
  render() {
    const { logo, contacts, copyRight } = this.props.items;

    return (
      <footer id="footer">
        <MainContainer
          settings={{
            backgroundColorMainContainer: "footer",
            heightMainContainer: "footer",
          }}
          contentContainer={
            <GridContainer mediaGridBlock="footer">
              <GridItem
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
              </GridItem>
              {contacts.map((item, index) => {
                return (
                  <Typography
                    key={`copyRight${index}`}
                    items={item}
                    settings={{
                      stylesText: "footer",
                      gridGap: "1.3vw",
                    }}
                  />
                );
              })}
            </GridContainer>
          }
        />

        <MainContainer
          settings={{
            backgroundColorMainContainer: "copyRight",
            stylesBlock: "callTo",
          }}
          contentContainer={
            <FlexContainer heightFlexContainer="header">
              <Typography items={copyRight} />
              <div>
                {copyRight.icons.map(({ icon, href }) => {
                  return (
                    <a
                      key={href}
                      href={href}
                      style={{ textDecoration: "none" }}
                    >
                      <Icon className={icon} stylesIcon="footer"></Icon>
                    </a>
                  );
                })}
              </div>
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
