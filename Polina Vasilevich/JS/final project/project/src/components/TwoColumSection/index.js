import { GridTwoColumnContainer } from "./styles";

export default function TwoColumnSection(props) {
  return (
    <section>
      <GridTwoColumnContainer sizeContainers={props.sizeContainers}>
        <div>{props.firstItem}</div>
        <div>{props.secondItem}</div>
      </GridTwoColumnContainer>
    </section>
  );
}
