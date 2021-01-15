import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
