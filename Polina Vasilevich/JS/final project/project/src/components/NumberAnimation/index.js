import { Title, Text, Line, Container } from "./styles";

function Numbers(props) {
  const { items } = props;
  console.log(items);
  return (
    <Container>
      {items.map(({ title, text, colorTitle }) => {
        return (
          <div key={title} className="positionCenterTitle">
            <Title style={{ color: colorTitle }}>{title}</Title>
            <Line></Line>
            <Text>{text}</Text>
          </div>
        );
      })}
    </Container>
  );
}

export default Numbers;
