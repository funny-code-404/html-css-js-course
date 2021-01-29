import React from "react";
import Title from "../Title";
import { GridContainer, Wrapper } from "../../styles";

import { Logo, ContentContainer, FlexContainer } from "./styles";

class Logos extends React.Component {
  render() {
    const { imgs } = this.props.items;
    const { items } = this.props;

    return (
      <section>
        <Wrapper>
          <Title items={items} position="center" />
          <FlexContainer>
            {imgs.map((item, index) => {
              return (
                <ContentContainer key={index}>
                  <Logo src={item} alt={item} />
                </ContentContainer>
              );
            })}
          </FlexContainer>
        </Wrapper>
      </section>
    );
  }
}
export default Logos;
