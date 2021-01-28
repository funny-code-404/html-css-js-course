import { Title, Text, Line, Section, ContentContainer} from "./styles";

function Numbers(props) {
  const { items } = props;
  console.log(items);
  return (
    <Section>
      {items.map(({ title, text, colorTitle }) => {
        return (
          <ContentContainer key={title}>
            <Title style={{ color: colorTitle }}>{title}</Title>
            <Line></Line>
            <Text>{text}</Text>
          </ContentContainer>
        );
      })}
    </Section>
  );
}

export default Numbers;
