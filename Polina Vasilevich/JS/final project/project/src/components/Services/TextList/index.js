import MainContainer from '../../MainContainer';
import Text from '../../Text';
export default function TextList(props) {
    const {items, backgroundColorMainContainer, positionContentContainer} = props;
    const contentContainer =  (
    <Text
        items={items}
        isLine
        positionText="left"
        colorTitle="#fff"
        colorText="#cccccc"
        positionContentContainer={positionContentContainer}
  />) 
    return <MainContainer contentContainer={contentContainer} backgroundColorMainContainer={backgroundColorMainContainer}/>
}