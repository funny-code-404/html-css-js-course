import React from "react";
import TitleAndText from "../BlockWithTitleAndText";
import {Title, PercentsContainer, PercentsItem} from './styles';
import {ContentContainer, WrapperBlock} from '../../styles';
import Button from '../Button';

class Percents extends React.Component {
  render() {
    const { items, backgroundColorMainContainer } = this.props;
    return (
          <ContentContainer backgroundColorMainContainer={backgroundColorMainContainer}>
            <WrapperBlock>
              <TitleAndText items={items} />
              {items.list.map(({ title, percents }) => {
                return (
                  <>
                    <Title>{title}</Title>
                    <PercentsContainer>
                      <PercentsItem style={{ width: percents }}></PercentsItem>
                    </PercentsContainer>
                  </>
                );
              })}
              <Button buttonLabel={items.buttonLabel} buttonIcon={items.buttonIcon}></Button>
            </WrapperBlock>
        </ContentContainer>
    );
  }
}

export default Percents;
