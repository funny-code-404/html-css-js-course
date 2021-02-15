import React from "react";

import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";

import { PercentsContainer, PercentsItem } from "./styles";

class Percents extends React.Component {
  render() {
    const { items, settings } = this.props;
    const contentContainer = (
      <>
        {items.list.map((item) => {
          return (
            <div key={item.title}>
              <Typography
                items={item}
                settings={{
                  positionText: "left",
                  sizeTitle: "s",
                }}
              ></Typography>
              <PercentsContainer {...settings}>
                <PercentsItem
                  {...settings}
                  style={{ width: item.percents }}
                ></PercentsItem>
              </PercentsContainer>
            </div>
          );
        })}
        <Button
          buttonLabel={items.buttonLabel}
          buttonIcon={items.buttonIcon}
          settings={settings}
        ></Button>
      </>
    );
    return (
      <MainContainer
        isTitle
        items={items}
        settings={settings}
        contentContainer={contentContainer}
      />
    );
  }
}

export default Percents;
