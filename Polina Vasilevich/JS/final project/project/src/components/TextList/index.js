import TitleAndText from "../BlockWithTitleAndText";
import { List, ListItem, Icon } from "./styles";
import {ContentContainer, WrapperBlock} from '../../styles';
import Button from "../Button";
// import { faLessThan } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextList(props) {
  const { items, backgroundColorMainContainer, isTransparentButton } = props;
  const { buttonLabel, buttonIcon } = props.items;
  const { points, icon } = props.items.list;

  return (
    <ContentContainer backgroundColorMainContainer={backgroundColorMainContainer}>
      <WrapperBlock>
      <TitleAndText items={items} />
      <List>
        {points.map((item, index) => {
          return (
            <ListItem key={index}>
              <Icon>{icon}</Icon>
              {item}
            </ListItem>
          );
        })}
      </List>
      {!isTransparentButton && <Button
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
          widthButton="221px"
        />}

      </WrapperBlock>
    </ContentContainer>
  );
}
