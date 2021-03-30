import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/fonts/OpenSans/openSans.css";
import "./assets/fonts/themify-icons.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { footerItems } from "./assets/const/footerItems";
import { Arrow } from "./mainStyles";
import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Features from "./pages/Features";
import Shortcodes from "./pages/Shortcodes";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

import logo from "./assets/img/header/logo.png";
import { handleScrollTop } from "./components/Button/handlers";

const routes = [
  {
    path: "/",
    label: "Home",
  },

  {
    path: "/demos",
    label: "Demos",
  },

  {
    path: "/features",
    label: "Features",
  },

  {
    path: "/shortcodes",
    label: "Shortcodes",
  },

  {
    path: "/shop",
    label: "Shop",
  },

  {
    path: "/blog",
    label: "Blog",
  },

  {
    path: "/portfolio",
    label: "Portfolio",
  },
];

class App extends React.Component {
  state = { hiddenArrow: true };

  handleScroll = () => {
    const hiddenArrow =
      window.pageYOffset < document.documentElement.clientHeight * 3;
    this.setState({
      hiddenArrow,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <Header routes={routes} logoImg={logo} logoText={"THEFOX BUSINESS"} />
        {!this.state.hiddenArrow && (
          <Arrow onClick={handleScrollTop}>
            <i className="ti-angle-up"></i>
          </Arrow>
        )}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demos" component={Demos} />
          <Route path="/features" component={Features} />
          <Route path="/shortcodes" component={Shortcodes} />
          <Route path="/shop" component={Shop} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer items={footerItems} />
      </div>
    );
  }
}

export default App;
