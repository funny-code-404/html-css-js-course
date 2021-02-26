import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Photos from "../Photos";
import Typography from "../Typography";
import { Icon } from "../Icon/styles";
import { IconsContainer } from "./styles";
import { GridContainer } from "../../mainStyles";

class Portfolio extends React.Component {
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
            <div style={{ marginTop: "200px", marginBottom: "82px" }}>
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
                  <IconsContainer backgroundColor={backgroundColor}>
                    <a
                      key={href}
                      href={href}
                      style={{ textDecoration: "none" }}
                    >
                      <Icon
                        className={icon}
                        stylesIcon="footer"
                        style={{ opacity: "1" }}
                      ></Icon>
                    </a>
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
