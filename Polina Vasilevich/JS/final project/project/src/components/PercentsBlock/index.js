import React from "react";

import MainContainer from '../MainContainer';
import Text from '../Text';
import Button from "../Button";

import { Title, PercentsContainer, PercentsItem } from "./styles";

class Percents extends React.Component {
  render() {
    const { items, backgroundColorMainContainer,colorTitle, colorText, backgroundColorContainer, backgroundColorItem } = this.props;

    const contentContainer = (
      <>
      {items.list.map((item) => {
            return (
              <div key={item.title}>
                <Text fontSizeTitle='sm' items={item} positionText='left' colorTitle={colorTitle}></Text>
                <PercentsContainer backgroundColorContainer={backgroundColorContainer}>
                  <PercentsItem backgroundColorItem={backgroundColorItem} style={{ width: item.percents }}></PercentsItem>
                </PercentsContainer>
              </div>
            );
          })
        }
          <Button
            buttonLabel={items.buttonLabel}
            buttonIcon={items.buttonIcon}
          >

          </Button>
      </>
    )
    return <MainContainer 
      isTitle 
      items={items}
      colorTitle={colorTitle}
      colorText={colorText}
      backgroundColorMainContainer={backgroundColorMainContainer}
      positionText="left"
      contentContainer={contentContainer}
      />
  
    }
}

export default Percents;
