import TitleAndText from "../BlockWithTitleAndText";
import { GridContainer} from "../../styles";
import {ContentContainer, WrapperBlock} from '../../styles';
import Button from '../Button';

import { Title, SubTitle, GridImg } from "./styles";
export default function TextWithImages(props) {
  const { items, backgroundColorMainContainer } = props;
  return (
    <ContentContainer backgroundColorMainContainer={backgroundColorMainContainer}>
        <WrapperBlock>
          <TitleAndText items={items} />
          <GridContainer numberColumns="2" gridGap="3%">
            {items.list.map(({ title, text, img }) => {
              return (
                <div key={title}>
                  <GridImg
                    className="gridImg"
                    style={{ backgroundImage: `url(${img})` }}
                  ></GridImg>
                  <Title>{title}</Title>
                  <SubTitle>{text}</SubTitle>
                </div>
              );
            })}
          </GridContainer>
          <Button backgroundColor='transparent' 
          borderColor='transparent'
          colorText='#4285f4' 
          buttonLabel={items.buttonLabel}
          buttonIcon={items.buttonIcon}
          width = 'none'
          >

          </Button>
        </WrapperBlock>
    </ContentContainer>
  );
}
