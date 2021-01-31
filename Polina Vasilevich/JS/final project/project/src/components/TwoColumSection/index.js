import { GridTwoColumnContainer, Wrapper } from "./styles";

export default function TwoColumnSection(props) {
  return (
    <section>
      <Wrapper>
        <GridTwoColumnContainer sizeContainers={props.sizeContainers}>
          <div>{props.firstItem}</div>
          <div>{props.secondItem}</div>
        </GridTwoColumnContainer>
      </Wrapper>
    </section>
  );
}
