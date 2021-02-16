import { Title } from "../../../Typography/styles";

export default function Categories(props) {
  const { settings, items } = props;

  return (
    <div>
      {items.map((item) => {
        return (
          <div style={{ paddingTop: "20px", borderBottom: "1px solid grey" }}>
            <Title sizeTitle="s">{item}</Title>
          </div>
        );
      })}
    </div>
  );
}
