import React from "react";
import PropTypes from "prop-types";

import MainContainer from "../../MainContainer";
import { Posts, Arrow, PostsItem } from "./styles";

import Pagination from "./Pagination";
import Info from "./Info";
import Content from "./Content";
import Buttons from "./Buttons";

class PostsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      limit: 5,
      items: props.items.list,
    };
  }

  nextPage = (e) => {
    e.preventDefault();
    const { items, currentPage, limit } = this.state;
    const amountOfPages = Math.round(items.length / limit);
    if (currentPage + 1 < amountOfPages) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  previousPage(e) {
    e.preventDefault();
    if (this.state.currentPage !== 0) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    }
  }

  setCurrentPage(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      currentPage: +e.target.value,
    }));
  }

  render() {
    const { styles, handleClick, icon } = this.props;
    const { icons } = this.props.items;
    const { currentPage, limit, items } = this.state;
    const amountOfPages = Math.round(items.length / limit);
    const beginIndexList = currentPage * limit;
    const endIndexList = beginIndexList + limit;

    return (
      <MainContainer
        settings={{ stylesBlock: "posts", mediaBlock: "posts" }}
        styles={styles}
        contentContainer={
          <>
            <Posts>
              {items
                .slice(beginIndexList, endIndexList)
                .map(({ info, content }, index) => {
                  return (
                    <PostsItem key={`postsItem${index}`}>
                      <Info items={info} />
                      <Content items={content} />
                      <Buttons items={content} icons={icons} index={index} />
                    </PostsItem>
                  );
                })}
            </Posts>
            <Pagination
              items={items}
              currentPage={currentPage}
              limit={limit}
              amountOfPages={amountOfPages}
              handleClickButtonPrevious={this.previousPage.bind(this)}
              handleClickButtonNext={this.nextPage.bind(this)}
              handleClickNumberPage={this.setCurrentPage.bind(this)}
            />
          </>
        }
      />
    );
  }
}

PostsComponent.propTypes = {
  items: PropTypes.array,
  styles: PropTypes.array,
  handleClick: PropTypes.func,
  icon: PropTypes.string,
};

PostsComponent.defaultProps = {
  items: {
    list: {
      content: {},
      info: {},
    },
  },

  styles: {},
  icon: "",
};

export default PostsComponent;
