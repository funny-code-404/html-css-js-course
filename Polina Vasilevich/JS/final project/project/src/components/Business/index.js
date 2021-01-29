import React from "react";
import TitleComponent from "../Title";
import Percents from "../Percents";
import { GridContainer } from "../../styles";
import { SubTitle, Text } from "../Title/styles";
import { GridImg } from "./styles";
import Button from "../Button";

class Business extends React.Component {
  render() {
    const { leftContent, rightContent } = this.props.items;
    return (
      <section>
        <GridContainer
          style={{ gridTemplateColumns: "55% 35%" }}
          columnGap="5%"
        >
          <div>
            <TitleComponent items={leftContent} />
            <GridContainer numberColumns="2" columnGap="5%">
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
      </section>
    );
  }
}

export default Business;
