import PropTypes from "prop-types";
import { Info, ContentContainer, Avatar, TagsContainer } from "./styles";
import Typography from "../../../Typography";
import { TextContainer, Title, Text } from "../../../Typography/styles";
import Button from "../../../Button";

import { parseDate } from "../../scripts";

InfoComponent.propTypes = {
  info: PropTypes.array,
};

InfoComponent.defaultProps = {
  info: [
    {
      date: new Date(),
    },
  ],
};

export default function InfoComponent(props) {
  const info = props.items;
  return (
    <Info>
      <ContentContainer>
        <Avatar backgroundImage={info.img} />

        <TextContainer stylesText="postAuthor">
          <Title>{info.title}</Title>
          <Text>{parseDate(info.date)}</Text>
        </TextContainer>
      </ContentContainer>

      <TagsContainer>
        {info.tags.map((tag, index) => {
          return (
            <Button
              className="postInfo"
              key={`tagsPostInfo${index}`}
              buttonLabel={tag}
              settings={{
                widthButton: "auto",
                stylesButton: "postInfo",
              }}
            />
          );
        })}
      </TagsContainer>
    </Info>
  );
}
