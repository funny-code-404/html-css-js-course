import React from "react";
import PropTypes from "prop-types";
import List from "./List";

import { HeaderStyle, Nav } from "./styles";

const items = ["Home", "About", "Servicing", "Contact us"];
class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <Nav>
          <List>
            {items.map((item) => (
              <List.Item key={item} text={item} />
            ))}
          </List>
        </Nav>
      </HeaderStyle>
    );
  }
}

// Header.propTypes = {
//   navItems: PropTypes.arrayOf(PropTypes.string),
// };

export default Header;
