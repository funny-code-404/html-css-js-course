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
        <Banner
          title="Web development project"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo eum quidem officia, accusamus ullam excepturi nisi temporibus, inventore autem iste eos perspiciatis cupiditate adipisci, aspernatur libero optio ea dignissimos."
        />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
