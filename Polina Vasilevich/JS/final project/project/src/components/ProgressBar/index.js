import React from "react";
import PropTypes from "prop-types";
import MainContainer from "../MainContainer";
import Typography from "../Typography";
import Button from "../Button";

import {
  ProgressBarContainer,
  ProgressBarItem,
  Percents,
  FlexContainer,
} from "./styles";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.list,
    };
  }

  getMaxProgress = () => {
    const progressList = [];
    this.state.items.map(({ percents }) => progressList.push(+percents));
    return Math.max(...progressList);
  };

  render() {
    const { items, settings } = this.props;
    const maxProgress = this.getMaxProgress();

    return (
      <MainContainer
        isTitle
        items={items}
        settings={settings}
        contentContainer={
          <div style={{ marginTop: "62px" }}>
            {items.list.map((item) => {
              return (
                <div key={item.title}>
                  <FlexContainer>
                    <Typography
                      items={item}
                      settings={{
                        positionText: "left",
                        stylesText: "percentBasic",
                      }}
                    ></Typography>
                    {item.percents === maxProgress && (
                      <Percents>{`${item.percents}%`}</Percents>
                    )}
                  </FlexContainer>

                  <ProgressBarContainer {...settings}>
                    <ProgressBarItem
                      {...settings}
                      style={{ width: `${item.percents}%` }}
                    ></ProgressBarItem>
                  </ProgressBarContainer>
                </div>
              );
            })}
            <Button
              buttonLabel={items.buttonLabel}
              buttonIcon={items.buttonIcon}
              settings={settings}
            ></Button>
          </div>
        }
      />
    );
  }
}

ProgressBar.propsTypes = {
  settings: PropTypes.object,
  items: PropTypes.array,
};

ProgressBar.defaultProps = {
  settings: {},
  items: [
    {
      title: "",
      subTitle: "",
      text: "",
      buttonLabel: "",
      buttonIcon: "",
      list: [
        {
          title: "",
          percents: 0,
        },
      ],
    },
  ],
};

export default ProgressBar;
