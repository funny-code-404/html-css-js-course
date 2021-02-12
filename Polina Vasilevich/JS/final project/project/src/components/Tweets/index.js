import React from "react";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import { Img } from "../Photos/styles";
import Button from "../Button";
import { FlexContainer } from "../../mainStyles";
import IconsList from "../IconsList";

class TweetsComponent extends React.Component {
  render() {
    const { settings } = this.props;
    const { content, buttons, info } = this.props.items;
    const { img, title, video } = content;

    const contentContainer = (
      <FlexContainer>
        <div>
          <FlexContainer>
            <div></div>
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
          </FlexContainer>
          <div className="container">
            {img && <Img backgroundImg={img} style={{ marginTop: "20px" }} />}
            {title && (
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
                  settings={{ typeButton: "link", colorTextButton: "grey" }}
                />
              );
            })}
          </div>
        </div>
        <div></div>
      </FlexContainer>
    );
    return <MainContainer contentContainer={contentContainer} />;
  }
}

export default TweetsComponent;
