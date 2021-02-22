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
    };
  }

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

  // handleActiveButtonLike = (e) => {
  //   e.preventDefault();
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     isActiveButtonLike: !prevState.isActiveButtonLike,
  //   }));
  // };

  // handleActiveButtonShareThis = (e) => {
  //   e.preventDefault();
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     showButtonsShareThis: !prevState.showButtonsShareThis,
  //   }));
  // };

  render() {
    const { buttons, list, icons } = this.props.items;

    return (
      <MainContainer
        settings={{ stylesBlock: "posts" }}
        contentContainer={
          <Posts>
            <Arrow onClick={this.props.handleClick}>{this.props.icon}</Arrow>
            {list.map(({ info, content }, index) => {
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
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                        this.handleActiveButton(e, this.state.activeButtonLike)
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
                        this.handleActiveButton(e, this.state.buttonsShareThis)
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
        }
      />
    );
  }
}

export default PostsComponent;
