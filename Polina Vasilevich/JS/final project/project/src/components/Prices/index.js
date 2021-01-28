import React from "react";
import Title from "../Title";
import Button from "../Button";
import { GridContainer } from "../../styles";
import { InfoContainer } from "./styles";

class Prices extends React.Component {
  render() {
    const { items, buttonLabel } = this.props;
    const { header } = this.props;

    return (
      <section>
        <Title items={header} position="center" />
        <div className="contentContainer">
          <GridContainer numberColumns="3">
            {items.map((item) => {
              return (
                <div>
                  <Title key={item.title} items={item} position="center" />
                  <InfoContainer>
                    {item.list.map(({ title, text }) => {
                      return (
                        <div key={title}>
                          <h3 className="smallFontSizeTitle">{title}</h3>
                          <p className="smallFontSizeText">{text}</p>
                        </div>
                      );
                    })}
                    <Button buttonLabel={buttonLabel}></Button>
                  </InfoContainer>
                </div>
              );
            })}
          </GridContainer>
        </div>
      </section>
    );
  }
}

export default Prices;
