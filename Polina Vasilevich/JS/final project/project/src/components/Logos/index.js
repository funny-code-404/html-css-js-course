import React from "react";
import Title from "../Title";
import { GridContainer } from "../../styles";

import { Logo, ContentContainer, FlexContainer } from "./styles";

class Logos extends React.Component {
  render() {
    const { imgs } = this.props.items;
    const { items } = this.props;

    return (
      <section>
        <Title items={items} position="center" />
        <GridContainer numberColumns="4">
          {imgs.map((item, index) => {
            return (
              <ContentContainer key={index}>
                <Logo src={item} alt={item} />
              </ContentContainer>
            );
          })}
        </GridContainer>
      </section>
    );
  }
}
export default Logos;
