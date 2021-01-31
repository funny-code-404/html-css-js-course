import TitleAndText from "../BlockWithTitleAndText";
import { List, ListItem, Icon } from "./styles";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextList(props) {
  const { items } = props;
  const { points, icon } = props.items.list;
  return (
    <div>
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
    </div>
  );
}
