import { GridContainer } from "../../mainStyles";
import Text from "../Text";
import Button from "../Button";

import {
  PriceContainer,
  InfoContainer,
  ItemInfoContainer,
  TextContainer,
} from "./styles";

export default function Table(props) {
  const { items } = props;
  return (
    <GridContainer widthItemGridContainer="250px">
      {items.map((item) => {
        return (
          <PriceContainer key={item.title}>
            <Text items={item} isLine />
            <InfoContainer>
              <TextContainer>
                {item.list.map((elem) => {
                  return (
                    <ItemInfoContainer key={elem.title}>
                      <Text items={elem} fontSizeTitle="xs" icon={item.icon} />
                    </ItemInfoContainer>
                  );
                })}
              </TextContainer>
              <Button
                width="220px"
                buttonLabel={item.buttonLabel}
                buttonIcon={item.buttonIcon}
              ></Button>
            </InfoContainer>
          </PriceContainer>
        );
      })}
    </GridContainer>
  );
}
