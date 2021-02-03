import React from "react";


import iconList1 from "../../assets/const/iconList1";

import Footer from "../../components/Footer";


import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Portfolio;
