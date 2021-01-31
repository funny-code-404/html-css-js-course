// import { GridContainer } from "../../styles";
import TitleAndText from "../BlockWithTitleAndText";
import Button from "../Button";

import {
  PriceContainer,
  InfoContainer,
  Title,
  Text,
  GridContainer,
  ItemInfoContainer,
  TextContainer,
} from "./styles";

export default function Table(props) {
  const { items } = props;
  return (
    <GridContainer>
      {items.map((item) => {
        return (
          <PriceContainer>
            {console.log(item)}
            <TitleAndText key={item.title} items={item} />
            <InfoContainer>
              <TextContainer>
                {item.list.map(({ title, text }) => {
                  return (
                    <ItemInfoContainer key={title}>
                      <Title>{title}</Title>
                      <Text>{text}</Text>
                    </ItemInfoContainer>
                  );
                })}
              </TextContainer>

              <Button buttonLabel={items.buttonLabel}></Button>
            </InfoContainer>
          </PriceContainer>
        );
      })}
    </GridContainer>
  );
}
