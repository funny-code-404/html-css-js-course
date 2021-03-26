import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Photos from "../Photos";
import Typography from "../Typography";
import { Icon } from "../Icon/styles";
import { IconsContainer, GridContainer } from "./styles";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, href) {
    e.preventDefault();
    // document.location = `${href}`;
    window.open(href);
  }

  render() {
    const { items, settings } = this.props;

    return (
      <MainContainer
        settings={settings}
        contentContainer={
          <>
            <Photos
              items={items}
              settings={{
                widthItemGridContainer: "400px",
                gridItemColumn: "3",
                gridRowGap: "10px",
                gridGap: "10px",
                heightMainContainer: "tweets",
              }}
            />
            <div style={{ marginTop: "58px", marginBottom: "75px" }}>
              <Typography
                items={items}
                settings={{
                  stylesText: "potrfolio",
                }}
              />
            </div>

            <GridContainer
              widthItemGridContainer="100px"
              style={{ margin: "40px 0" }}
            >
              {items.icons.map(({ icon, href, backgroundColor }) => {
                return (
                  <IconsContainer
                    backgroundColor={backgroundColor}
                    onClick={(e) => this.handleClick(e, href)}
                  >
                    {/* <a
                      key={href}
                      href={href}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    > */}
                    <Icon
                      className={icon}
                      stylesIcon="footer"
                      style={{ opacity: "1" }}
                    ></Icon>
                    {/* </a> */}
                  </IconsContainer>
                );
              })}
            </GridContainer>
          </>
        }
      />
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.array,
  settings: PropTypes.object,
};

Portfolio.defaultProps = {
  items: [{ icons: [{ icon: "", href: "", backgroundColor: "" }] }],
  settings: PropTypes.object,
};

export default Portfolio;
