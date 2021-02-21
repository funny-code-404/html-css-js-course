import React from "react";
import Typography from "../../Typography";
import Button from "../../Button";
import MainContainer from "../../MainContainer";
import { Img, ContentContainer } from "../../Icon copy/styles";
import { Posts, Arrow } from "./styles";
import { handleContinueRead } from "../../Button/handlers";
class PostsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveButtonLike: false,
    };
  }

  handleLike = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      isActiveButtonLike: !prevState.isActiveButtonLike,
    }));
  };

  render() {
    const { buttons, list } = this.props.items;
    const styleButtonLike = this.state.isActiveButtonLike
      ? { fontWeight: "bold", color: "#000" }
      : {};

    const buttonLikeLabel = !this.state.isActiveButtonLike
      ? "Like this"
      : "Like";
    return (
      <Posts>
        <Arrow onClick={this.props.handleClick}>
          <i className={this.props.icon}></i>
        </Arrow>
        {list.map(({ info, content }) => {
          return (
            <div
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
                    handleButton={(e) => handleContinueRead(e, content.href)}
                    buttonLabel="Continue Reading"
                    settings={{
                      typeButton: "link",
                      colorTextButton: "grey",
                    }}
                  />
                )}

                <Button
                  styles={styleButtonLike}
                  handleButton={this.handleLike}
                  buttonLabel={buttonLikeLabel}
                  settings={{
                    typeButton: "link",
                    colorTextButton: "grey",
                  }}
                />

                <Button
                  buttonLabel="Share this"
                  settings={{
                    typeButton: "link",
                    colorTextButton: "grey",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Posts>
    );
  }
}

export default PostsComponent;
