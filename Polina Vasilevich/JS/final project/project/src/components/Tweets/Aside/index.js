import React from "react";
import Article from "./Article";
import Categories from "./Categories";
import IconsList from "../../IconsList";
import Button from "../../Button";
import Form from "../../Form";
import Photos from "../../Photos";
import MainContainer from "../../MainContainer";

import { Aside, Search } from "./styles";
class AsideComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items.posts.items };
  }

  handleFilterList = (e) => {
    const posts = this.props.items.posts.items;
    const filteredList = posts.filter(({ title, text }) => {
      return (
        title.toLowerCase().search(e.target.value.toLowerCase()) !== -1 ||
        text.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({ items: filteredList });
  };

  render() {
    const { settings, style } = this.props;
    const { posts, tags, photos, form, categories, archive } = this.props.items;

    return (
      <MainContainer
        settings={{
          stylesBlock: "aside",
          backgroundColorMainContainer: "aside",
          heightMainContainer: "tweets",
        }}
        styles={style}
        contentContainer={
          <Aside id="aside">
            <Search
              type="search"
              placeholder="Search..."
              onChange={this.handleFilterList}
            ></Search>
            <Article
              items={posts}
              contentContainer={
                <IconsList
                  items={this.state.items}
                  settings={{
                    heightImg: "81px",
                    widthImg: "111px",
                    positionIcons: "left",
                    positionText: "left",
                    heightMainContainer: "tweets",
                    stylesText: "postsTitle",
                    stylesBlock: "asideIconsList",
                  }}
                />
              }
            />
            <Article
              items={tags}
              contentContainer={
                <div>
                  {tags.items.map((tag) => {
                    return (
                      <Button
                        buttonLabel={tag}
                        settings={{
                          widthButton: "auto",
                          colorButton: "grey",
                          colorTextButton: "grey",
                        }}
                      />
                    );
                  })}
                </div>
              }
            />
            <Form
              idForm="form4"
              items={form}
              settings={{
                stylesText: "tweets",
                paddingLeftRight: "none",
                paddingTop: "20px",
                paddingBottom: "70px",
                positionText: "left",
                alignItems: "left",
                sizeInput: "tweets",
                widthButton: "tweets",
              }}
              style={{ margin: "20px 0" }}
            />
            <Article
              items={photos}
              contentContainer={
                <Photos
                  items={photos}
                  settings={{
                    heightImg: "100px",
                    widthItemGridContainer: "100px",
                  }}
                />
              }
            />
            <Article
              items={categories}
              contentContainer={<Categories items={categories.items} />}
            />
            <Article
              items={archive}
              contentContainer={<Categories items={archive.items} />}
            />
          </Aside>
        }
      />
    );
  }
}

export default AsideComponent;
