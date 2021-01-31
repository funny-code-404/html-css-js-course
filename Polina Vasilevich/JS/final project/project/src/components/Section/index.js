import {
  Section,
  Wrapper,
  TextContainer,
  Title,
  SubTitle,
  Line,
} from "./styles";

function SectionComponent(props) {
  const { backgroundImg, height } = props;
  const { title, subTitle } = props.items;
  return (
    <Section
      height={height}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Wrapper paddingLeftRight={props.paddingLeftRight}>
        <TextContainer>
          <Title>{title}</Title>
          <Line />
          <SubTitle>{subTitle}</SubTitle>
        </TextContainer>
        <div>{props.children}</div>
      </Wrapper>
    </Section>
  );
}

export default SectionComponent;
