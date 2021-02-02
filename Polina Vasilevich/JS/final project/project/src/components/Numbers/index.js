import { Title, Text, Line, Section, ContentContainer, Wrapper} from "./styles";


function Numbers(props) {
  const { items } = props;
  console.log(items);
  return (
    <Section>
      <Wrapper>
        {items.map(({ title, text, colorTitle }) => {
          return (
            <ContentContainer key={title}>
              <Title style={{ color: colorTitle }}>{title}</Title>
              <Line></Line>
              <Text>{text}</Text>
            </ContentContainer>
          );
        })}
      </Wrapper>
      
    </Section>
  );
}

export default Numbers;
