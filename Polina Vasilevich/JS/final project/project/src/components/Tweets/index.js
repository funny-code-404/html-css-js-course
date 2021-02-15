import React from "react";
import MainContainer from "../MainContainer";
import Typography from "../Typography";

import Button from "../Button";
import { GridTwoColumnContainer } from "../TwoColumSection/styles";
import { Img, ContentContainer } from "../Icon copy/styles";

import IconsList from "../IconsList";
import Form from "../Form";
import Photos from "../Photos";

class TweetsComponent extends React.Component {
  render() {
    const { settings } = this.props;
    const { buttons, list } = this.props.items.tweets;
    const { items, tags, photos, input } = this.props.items.asideItems;
    console.log(this.props.items.asideItems.imgs);
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
                      style={{ borderRadius: "50%" }}
                    />
                    <Typography
                      items={info}
                      settings={{ positionText: "left", sizeTitle: "xs" }}
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
                        sizeTitle: "ss",
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
        <div>
          <IconsList
            items={items}
            settings={{
              heightImg: "81px",
              widthImg: "111px",
              positionIcons: "left",
              positionText: "left",

              paddingTop: "0",
              paddingLeftRight: "none",
            }}
          />
          <div className="buttons">
            {tags.map((tag) => {
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
          {/* <Form items={this.props.items.asideItems} /> */}
          <Photos
            items={this.props.items.asideItems}
            settings={{ heightImg: "70px", widthItemGridContainer: "70px" }}
          />
        </div>
      </GridTwoColumnContainer>
    );
    return <MainContainer contentContainer={contentContainer} />;
  }
}

export default TweetsComponent;
