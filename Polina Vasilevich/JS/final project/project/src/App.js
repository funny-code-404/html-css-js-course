import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/fonts/OpenSans/openSans.css";
import "./assets/fonts/themify-icons.css";
import Header from "./components/Header";
import Home from "./pages/Home";

// import "normalize.css";
import Demos from "./pages/Demos";
import Features from "./pages/Features";
import Shortcodes from "./pages/Shortcodes";
import Shop from "./pages/Shop";
// import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

import logo from "./assets/img/logo.png";

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
  render() {
    return (
      <div className="App">
        <Header
          routes={routes}
          logo={logo}
          textLogo={"thefox business".toUpperCase()}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demos" component={Demos} />
          <Route path="/features" component={Features} />
          <Route path="/shortcodes" component={Shortcodes} />
          <Route path="/shop" component={Shop} />
           <Route path="/portfolio" component={Portfolio} />
          {/*  />
          
         
          <Route path="/blog" component={Blog} />
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
