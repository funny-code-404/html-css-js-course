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
          <PriceContainer key={item.title}>
            <TitleAndText items={item} />
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

              <Button width='220px' buttonLabel={item.buttonLabel} buttonIcon={item.buttonIcon}></Button>
            </InfoContainer>
          </PriceContainer>
        );
      })}
    </GridContainer>
  );
}
