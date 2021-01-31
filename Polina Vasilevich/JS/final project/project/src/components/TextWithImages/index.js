import TitleAndText from "../BlockWithTitleAndText";
import { GridContainer } from "../../styles";

import { Title, SubTitle, GridImg } from "./styles";
export default function TextWithImages(props) {
  const { items } = props;
  return (
    <div>
      <TitleAndText items={items} />
      <GridContainer numberColumns="2" gridGap="3%">
        {items.list.map(({ title, text, img }) => {
          return (
            <div key={title}>
              <GridImg
                className="gridImg"
                style={{ backgroundImage: `url(${img})` }}
              ></GridImg>
              <Title>{title}</Title>
              <SubTitle>{text}</SubTitle>
            </div>
          );
        })}
      </GridContainer>
    </div>
  );
}
