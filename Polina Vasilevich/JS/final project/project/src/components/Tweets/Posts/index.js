import React from "react";
import Typography from "../../Typography";
import Button from "../../Button";
import MainContainer from "../../MainContainer";
import { Img, ContentContainer } from "../../Icon copy/styles";
import { Posts, Arrow, Icon } from "./styles";
import { handleContinueRead } from "../../Button/handlers";

class PostsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonLike: [],
      buttonsShareThis: [],
      currentPage: 0,
      beginIndexList: 0,
      endIndexList: 5,
      list: props.items.list,
    };
  }

  nextPage = (e) => {
    e.preventDefault();
    if (this.state.currentPage + 1 < Math.round(this.state.list.length / 5)) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
        beginIndexList: prevState.beginIndexList + 5,
        endIndexList: prevState.endIndexList + 5,
      }));
    }
  };

  previousPage = (e) => {
    e.preventDefault();
    if (this.state.currentPage !== 0) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
        beginIndexList: prevState.beginIndexList - 5,
        endIndexList: prevState.endIndexList - 5,
      }));
    }
  };

  handleActiveButton = (e, items) => {
    e.preventDefault();
    if (!items.includes(e.target.id)) {
      items.push(e.target.id);
      this.setState({
        items: items,
      });
    } else {
      items.splice(items.indexOf(e.target.id), 1);
      this.setState({
        items: items,
      });
    }
  };

  render() {
    const { icons } = this.props.items;
    const { list, beginIndexList, endIndexList, currentPage } = this.state;
    const styleButtonPrevious = !currentPage ? { opacity: "0" } : {};
    const styleButtonNext =
      this.state.currentPage + 1 >= Math.round(this.state.list.length / 5)
        ? { opacity: "0" }
        : {};

    return (
      <MainContainer
        settings={{ stylesBlock: "posts" }}
        styles={this.props.styles}
        contentContainer={
          <>
            <Posts>
              <div className="pagination" style={{ display: "flex" }}>
                <button style={styleButtonNext} onClick={this.nextPage}>
                  Next
                </button>
                <div style={{ display: "flex" }}>
                  {this.state.list
                    .slice(0, Math.round(this.state.list.length / 5))
                    .map((item, index) => {
                      const styles =
                        currentPage === index ? { fontWeight: "bold" } : {};
                      return (
                        <p style={styles} id={`pagination${index}`}>
                          {index + 1}
                        </p>
                      );
                    })}
                </div>

                <button style={styleButtonPrevious} onClick={this.previousPage}>
                  Previous
                </button>
              </div>

              <Arrow onClick={this.props.handleClick}>{this.props.icon}</Arrow>
              {list
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
                        borderBottom: "1px solid grey",
                        paddingBottom: "53px",
                      }}
                    >
                      <div
                        className="info"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <ContentContainer positionIcons="left">
                          <Img
                            backgroundImg={info.img}
                            heightImg="51px"
                            widthImg="51px"
                            style={{ borderRadius: "50%", marginRight: "20px" }}
                          />
                          <Typography
                            items={info}
                            settings={{
                              positionText: "left",
                              stylesText: "postAuthor",
                            }}
                          />
                        </ContentContainer>

                        <div className="tag">
                          {info.tags.map((tag) => {
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
                      </div>

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
                        {/* {buttons.map((button) => {
                  return (
                    <Button
                      buttonLabel={button}
                      settings={{
                        typeButton: "link",
                        colorTextButton: "grey",
                      }}
                    />
                  );
                })} */}
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
            {/* <div className="pagination">
          <button style={{ cursor: "pointer" }} onClick={this.nextPage}>
            Next
          </button>
          <button onClick={this.previousPage}>Previous</button>
          {this.state.list
            .slice(this.state.list.length / 3)
            .map((item, index) => (
              <p id={`pagination${index}`}>{index + 1}</p>
            ))}
        </div> */}
          </>
        }
      />
    );
  }
}

export default PostsComponent;
