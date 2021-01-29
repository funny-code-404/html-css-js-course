import React from "react";
import Title from "../Title";
import { GridContainer } from "../../styles";

import { Logo, ContentContainer, Wrapper } from "./styles";

class Logos extends React.Component {
  render() {
    const { imgs, backgroundImg } = this.props.items;
    const { items } = this.props;
    return (
      <section
        style={{
          backgroundImage: `url(${backgroundImg})`,
          height: "1277px",
          backgroundSize: "cover",
        }}
      >
        <Wrapper>
          <Title items={items} position="center" />
          <GridContainer numberColumns="4" gridGap="56px 13%">
            {imgs.map((item, index) => {
              return (
                <ContentContainer key={index}>
                  <Logo src={item} alt={item} />
                </ContentContainer>
              );
            })}
          </GridContainer>
        </Wrapper>
      </section>
    );
  }
}
export default Logos;
