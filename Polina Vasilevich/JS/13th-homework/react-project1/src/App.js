import React from "react";
import HeaderComponet from "./components/Header";
import Banner from "./components/Banner";
import Article from "./components/Article";
import Footer from "./components/Footer";

import articles from "./assets/articles";

import { Title, Text, Section, ArticleContainer } from "./styles";
const headers = ["Home", "About", "Servicing", "Contact us"];

const sectionItems = [
  {
    title: "About Us",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur! Excepturi repudiandae cum commodi deleniti neque.",
  },
];
class App extends React.Component {
  render() {
    return (
      <>
        <HeaderComponet headers={headers} />
        <Banner
          title="Web development project"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nemo eum quidem officia, accusamus ullam excepturi nisi temporibus, inventore autem iste eos perspiciatis cupiditate adipisci, aspernatur libero optio ea dignissimos."
        />
        <main>
          {sectionItems.map(({ title, text }) => {
            return (
              <Section key={title}>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <ArticleContainer>
                  {articles.map(({ title, text, date, id }) => (
                    <Article key={id} title={title} text={text} date={date} />
                  ))}
                </ArticleContainer>
              </Section>
            );
          })}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
