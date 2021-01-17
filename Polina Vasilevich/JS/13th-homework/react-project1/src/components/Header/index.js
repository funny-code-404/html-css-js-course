import React from "react";
import PropTypes from "prop-types";

import HeaderList from "./HeaderList";

import { Header, Nav } from "./styles";

class HeaderComponet extends React.Component {
  render() {
    const { headers } = this.props;
    return (
      <Header>
        <Nav>
          <HeaderList headers={headers} />
        </Nav>
      </Header>
    );
  }
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string),
};

export default HeaderComponet;
