import {GridContainer} from '../../styles';
import {GridItem} from './styles';

export default function BlockImg(props) {
    const {imgs} = props.items;
    return (
        <GridContainer numberColumns='2' numberRows='4'>
            {
                imgs.map(img => {
                    return (
                        <GridItem style={{backgroundImage: `url(${img})`}}/>
                    )
                
                })
            }
        </GridContainer>
    )
}