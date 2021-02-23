import { Title } from "../../../Typography/styles";

export default function Categories(props) {
  const { settings, items } = props;

  return (
    <div style={{ marginBottom: "20px" }}>
      {items.map((item) => {
        return (
          <div
            style={{
              borderBottom: "1px solid #EBEBEB",
            }}
          >
            <a
              href="https://qna.habr.com/q/600318"
              style={{ pointer: "cursor", textDecoration: "none" }}
            >
              <Title sizeTitle="categories">{item}</Title>
            </a>
          </div>
        );
      })}
    </div>
  );
}