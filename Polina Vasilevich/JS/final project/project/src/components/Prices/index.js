import React from "react";
import Title from "../Title";
import Button from "../Button";
import { GridContainer, Wrapper } from "../../styles";
import { InfoContainer, ContentContainer, ItemInfoContainer } from "./styles";
class Prices extends React.Component {
  render() {
    const { items, buttonLabel, backgroundImage } = this.props;
    const { header } = this.props;

    return (
      <section>
        <Wrapper>
          <Title items={header} position="center" />
          <div className="contentContainer">
            <GridContainer numberColumns="3">
              {items.map((item) => {
                return (
                  <ContentContainer>
                    <Title key={item.title} items={item} position="center" />
                    <InfoContainer>
                      {item.list.map(({ title, text }) => {
                        return (
                          <ItemInfoContainer key={title}>
                            <h3 className="smallFontSizeTitle">{title}</h3>
                            <p className="smallFontSizeText">{text}</p>
                          </ItemInfoContainer>
                        );
                      })}
                      <Button buttonLabel={buttonLabel}></Button>
                    </InfoContainer>
                  </ContentContainer>
                );
              })}
            </GridContainer>
          </div>
        </Wrapper>
      </section>
    );
  }
}

export default Prices;
