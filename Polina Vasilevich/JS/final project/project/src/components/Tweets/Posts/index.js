import React from "react";
import Typography from "../../Typography";
import Button from "../../Button";

import { Img, ContentContainer } from "../../Icon copy/styles";
import { Posts, Arrow } from "./styles";

class PostsComponent extends React.Component {
  render() {
    const { buttons, list } = this.props.items;

    return (
      <Posts style={this.props.style}>
        <Arrow onClick={this.props.handleClick}></Arrow>
        {list.map(({ info, content }) => {
          return (
            <div className="article" style={{ marginBottom: "50px" }}>
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
                {buttons.map((button) => {
                  return (
                    <Button
                      buttonLabel={button}
                      settings={{
                        typeButton: "link",
                        colorTextButton: "grey",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </Posts>
    );
  }
}

export default PostsComponent;
