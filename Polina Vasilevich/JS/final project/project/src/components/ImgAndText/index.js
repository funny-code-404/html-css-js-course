import React from "react";

import { GridContainer, ContentContainer, Title, Text, Icon } from "./styles";

class ImgAndText extends React.Component {
  render() {
    const {
      items,
      numberColumns,
      colorText,
      positionIcon,
      circleIcon,
    } = this.props;

    return (
      <section>
        <GridContainer numberColumns={numberColumns}>
          {items.map(({ img, icon, title, text }) => {
            return (
              <ContentContainer positionIcon={positionIcon}>
                {img ? (
                  <img src={img} alt={title} />
                ) : (
                  <Icon
                    colorText={colorText}
                    circleIcon={circleIcon}
                    className={`${icon}`}
                  ></Icon>
                )}

                <div className="textContainer">
                  <Title>{title}</Title>
                  <Text>{text}</Text>
                </div>
              </ContentContainer>
            );
          })}
        </GridContainer>
      </section>
    );
  }
}

export default ImgAndText;
