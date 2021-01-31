import { ContentContainer, Logo, FlexContainer } from "./styles";

export default function LogosList(props) {
  const { imgs } = props.items;
  return (
    <FlexContainer>
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
