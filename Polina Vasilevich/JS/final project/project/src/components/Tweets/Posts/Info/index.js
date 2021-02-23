import PropTypes from "prop-types";
import { Info, ContentContainer, Avatar, TagsContainer } from "./styles";
import Typography from "../../../Typography";
import Button from "../../../Button";
InfoComponent.propTypes = {
  info: PropTypes.array,
};

InfoComponent.defaultProps = {
  info: [],
};

export default function InfoComponent(props) {
  const info = props.items;
  console.log(info.img);
  return (
    <Info>
      <ContentContainer>
        <Avatar backgroundImage={info.img} />
        <Typography
          items={info}
          settings={{
            positionText: "left",
            stylesText: "postAuthor",
          }}
        />
      </ContentContainer>

      <TagsContainer>
        {info.tags.map((tag, index) => {
          return (
            <Button
              key={`tagsPostInfo${index}`}
              buttonLabel={tag}
              settings={{
                widthButton: "auto",
                colorButton: "postInfo",
              }}
            />
          );
        })}
      </TagsContainer>
    </Info>
  );
}