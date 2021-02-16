import { Title } from "../../../Typography/styles";

export default function Categories(props) {
  const { settings, items } = props;

  return (
    <div>
      {items.map((item) => {
        return (
          <div style={{ padding: "5px", borderBottom: "1px solid #EBEBEB" }}>
            <Title sizeTitle="categories">{item}</Title>
          </div>
        );
      })}
    </div>
  );
}
