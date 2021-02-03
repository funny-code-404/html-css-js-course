import {TextContainer, Title, Text} from './styles';

export default function TextIcon(props) {
    const {title, text} = props.items;
    return (
        <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </TextContainer>
    )
}