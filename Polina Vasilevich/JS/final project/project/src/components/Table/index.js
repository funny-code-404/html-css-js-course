import { GridContainer } from "../../mainStyles";
import Typography from "../Typography";
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
    <GridContainer widthItemGridContainer="250px" gridGap="0">
      {items.map((item) => {
        return (
          <PriceContainer key={item.title}>
            <Typography items={item} isLine />
            <InfoContainer>
              <TextContainer>
                {item.list.map((elem) => {
                  return (
                    <ItemInfoContainer>
                      <Typography
                        items={elem}
                        settings={{
                          sizeTitle: "xs",
                        }}
                        icon={item.icon}
                      />
                    </ItemInfoContainer>
                  );
                })}
              </TextContainer>
              <Button
                settings={{ widthButton: "m" }}
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
