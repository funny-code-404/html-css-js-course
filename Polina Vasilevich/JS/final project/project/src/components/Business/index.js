import React from "react";
import TitleComponent from "../BlockWithTitleAndText";
import Percents from "../PercentsBlock";
import { GridContainer } from "../../styles";
import { SubTitle, Text } from "../BlockWithTitleAndText/styles";
import { GridImg } from "./styles";
import Button from "../Button";
import { Wrapper } from "./styles";

class Business extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    return (
      <section>
        <Wrapper>
          <GridContainer
            style={{ gridTemplateColumns: "55% 34%" }}
            gridGap="11%"
          >
            <div>
              <TitleComponent items={leftContent} />
              <GridContainer numberColumns="2" gridGap="3%">
                {leftContent.list.map(({ title, text, img }) => {
                  return (
                    <div key={title}>
                      <GridImg
                        className="gridImg"
                        style={{ backgroundImage: `url(${img})` }}
                      ></GridImg>
                      <SubTitle>{title}</SubTitle>
                      <Text>{text}</Text>
                    </div>
                  );
                })}
              </GridContainer>
            </div>
            <div>
              <TitleComponent items={rightContent} />
              <Percents items={rightContent.list} />
              <Button></Button>
            </div>
          </GridContainer>
        </Wrapper>
      </section>
    );
  }
}

export default Business;
