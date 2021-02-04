import { Title, SubTitle, Line, Text, TextContainer } from "./styles";

export default function TextComponent(props) {
    const {title, subTitle, text, textList} = props.items;
    const {fontSizeTitle, fontWeightTitle, isLine, positionText, widthLine, colorTitle, colorText} = props;
    return (
        <TextContainer positionText = {positionText}>
            <Title fontSizeTitle={fontSizeTitle} fontWeightTitle={fontWeightTitle} colorTitle={colorTitle}>{title}</Title>
            {
                isLine && <Line widthLine={widthLine}></Line>
            }

            {
                subTitle && <SubTitle>{subTitle}</SubTitle>
            }


            <Text colorText={colorText}>{text}</Text>

            {
                textList && 
                (   
                    textList.text.map((item) => {
                         return <Text colorText={colorText}><i className={textList.icon}></i>{`>  ${item}`}</Text>
                    })
                   
                )
            }
        </TextContainer>
    )
}