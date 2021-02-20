import { ContentContainer, TextContainer } from "./styles";
import { Title, SubTitle, Line } from "../Typography/styles";

import Button from "../Button";

export default function Works(props) {
  const { title, subTitle, buttonIcon, buttonLabel } = props;
  return (
    <ContentContainer>
      <TextContainer>
        <Title color="#fff">{title}</Title>
        <Line></Line>
        <SubTitle color="">{subTitle}</SubTitle>
        <Button
          backgroundColor="#82B440"
          borderColor="#82B440"
          buttonLabel={buttonLabel}
          buttonIcon={buttonIcon}
        />
      </TextContainer>
    </ContentContainer>
  );
}
