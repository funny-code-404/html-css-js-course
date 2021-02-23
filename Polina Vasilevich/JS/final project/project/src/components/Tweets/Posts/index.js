import React from "react";
import Typography from "../../Typography";
import Button from "../../Button";
import MainContainer from "../../MainContainer";
import { Img, ContentContainer } from "../../Icon copy/styles";
import { Posts, Arrow, Icon } from "./styles";
import { handleContinueRead } from "../../Button/handlers";
import Pagination from "./Pagination";
import Info from "./Info";
class PostsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indices: [],
      activeButtonLike: [],
      buttonsShareThis: [],

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

  handleActiveButton = (e, items) => {
    e.preventDefault();
    if (!items.includes(e.target.id)) {
      items.push(e.target.id);
      this.setState({
        indices: items,
      });
    } else {
      items.splice(items.indexOf(e.target.id), 1);
      this.setState({
        indices: items,
      });
    }
  };

  render() {
    const { icons } = this.props.items;
    const { currentPage, limit, items } = this.state;
    const amountOfPages = Math.round(items.length / limit);
    const beginIndexList = currentPage * limit;
    const endIndexList = beginIndexList + limit;

    console.log(items);
    return (
      <MainContainer
        settings={{ stylesBlock: "posts" }}
        styles={this.props.styles}
        contentContainer={
          <>
            <Posts>
              <Arrow onClick={this.props.handleClick}>{this.props.icon}</Arrow>

              {items
                .slice(beginIndexList, endIndexList)
                .map(({ info, content }, index) => {
                  const condition = this.state.activeButtonLike.includes(
                    `like${index}`
                  );
                  const styleButtonLike = condition
                    ? { fontWeight: "bold", color: "#000" }
                    : {};

                  const buttonLikeLabel = !condition ? "Like this" : "Like";

                  return (
                    <div
                      key={index}
                      className="article"
                      style={{
                        marginBottom: "60px",
                        borderBottom: "1px solid #ebebeb",
                        paddingBottom: "53px",
                      }}
                    >
                      <Info items={info} />

                      <div className="container">
                        {content.img && (
                          <Img
                            backgroundImg={content.img}
                            style={{ marginTop: "20px" }}
                            heightImg="401px"
                          />
                        )}
                        {content.title && (
                          <Typography
                            items={content}
                            settings={{
                              positionText: "left",
                              stylesText: "postTitle",
                              colorTitle: "grey",
                            }}
                          />
                        )}
                      </div>

                      <div className="buttons">
                        {content.href && (
                          <Button
                            handleButton={(e) =>
                              handleContinueRead(e, content.href)
                            }
                            buttonLabel="Continue Reading"
                            settings={{
                              typeButton: "link",
                              colorTextButton: "grey",
                            }}
                          />
                        )}

                        <Button
                          id={`like${index}`}
                          styles={styleButtonLike}
                          handleButton={(e) =>
                            this.handleActiveButton(
                              e,
                              this.state.activeButtonLike
                            )
                          }
                          buttonLabel={buttonLikeLabel}
                          settings={{
                            typeButton: "link",
                            colorTextButton: "grey",
                          }}
                        />

                        <Button
                          id={`shareThis${index}`}
                          handleButton={(e) =>
                            this.handleActiveButton(
                              e,
                              this.state.buttonsShareThis
                            )
                          }
                          buttonLabel="Share this"
                          settings={{
                            typeButton: "link",
                            colorTextButton: "grey",
                          }}
                        />
                        {this.state.buttonsShareThis.includes(
                          `shareThis${index}`
                        ) &&
                          icons.map(({ icon, href }) => (
                            <Icon href={href}>
                              <i className={icon}></i>
                            </Icon>
                          ))}
                      </div>
                    </div>
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

export default PostsComponent;
