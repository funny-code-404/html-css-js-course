import { ContentContainer, Logo, FlexContainer } from "./styles";

export default function LogosList(props) {
  const { imgs } = props.items;
  const {oneString} = props;
  return (
    <FlexContainer oneString={oneString}>
      {imgs.map((item, index) => {
        return (
          <ContentContainer key={index}>
            <Logo src={item} alt={item} />
          </ContentContainer>
        );
      })}
    </FlexContainer>
  );
}
