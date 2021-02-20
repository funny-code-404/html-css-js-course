import { Title, Line } from "../../../Typography/styles";

export default function Article(props) {
  const { settings, items, contentContainer } = props;

  return (
    <article style={{ marginBottom: "40px", backgroundColor: "#F7F7F7" }}>
      <Title sizeTitle="tweets">{items.title}</Title>
      <Line widthLine="small" />
      {contentContainer}
    </article>
  );
}
