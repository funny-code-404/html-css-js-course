import { Title, SubTitle, Line, Text, TextContainer } from "../Typography/styles";

export default function TextComponent(props) {
    const {title, subTitle, text, textList} = props.items;
    const {fontSizeTitle, fontWeightTitle, positionTextContainer, positionText, isLine} = props;
    return (
        <TextContainer positionTextContainer={positionTextContainer} positionText={positionText}>
            <Title fontSizeTitle={fontSizeTitle} fontWeightTitle={fontWeightTitle}>{title}</Title>
            {
                isLine && <Line></Line>
            }

            {
                subTitle && <SubTitle>{subTitle}</SubTitle>
            }


            <Text>{text}</Text>

            {
                textList && 
                (
                    textList.map(({icon, text}) => {
                         <Text><i className={icon}></i> {text}</Text>
                    })
                   
                )
            }
        </TextContainer>
    )
}