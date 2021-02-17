import React from "react";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";
import { GridTwoColumnContainer } from "../TwoColumSection/styles";
import { Img, ContentContainer } from "../Icon copy/styles";

import Aside from "./Aside";

class TweetsComponent extends React.Component {
  render() {
    const { settings } = this.props;
    const { buttons, list } = this.props.items.tweets;

    const contentContainer = (
      <GridTwoColumnContainer sizeContainers="65% 25%" gridGap="5%">
        <div>
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
        </div>
        <Aside items={this.props.items.asideItems} />
      </GridTwoColumnContainer>
    );
    return <MainContainer contentContainer={contentContainer} />;
  }
}

export default TweetsComponent;
