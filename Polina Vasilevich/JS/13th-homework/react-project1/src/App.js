import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

const sectionItems = [
  {
    title: "About Us",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
    facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
    Excepturi repudiandae cum commodi deleniti neque.`,
    articleItems: [
      {
        title: "Awesome Icons",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
      {
        title: "About Us",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
      {
        title: "One Page",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
    ],
  },

  {
    title: "Our Services",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto exercitationem, perspiciatis deleniti, quam pariatur quod soluta eum nam fuga odio eius iste ex debitis enim ab nostrum necessitatibus? Laudantium!`,
    articleItems: [
      {
        title: "Research",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
      {
        title: "Portfolio",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
      {
        title: "Support",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis dolores minus
        facere minima molestias fugiat voluptas maiores! Quia quisquam repellendus numquam non consequuntur!
        Excepturi repudiandae cum commodi deleniti neque.`,
      },
    ],
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <main>
          {sectionItems.map(({ title, text, articleItems }, index) => {
            return (
              <Section
                key={index}
                title={title}
                text={text}
                articleItems={articleItems}
              />
            );
          })}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
