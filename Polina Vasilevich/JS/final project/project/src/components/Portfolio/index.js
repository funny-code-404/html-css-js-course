import React from "react";
import MainContainer from "../MainContainer";
import Photos from "../Photos";
import Typography from "../Typography";
import Button from "../Button";
import IconsList from "../IconsList";

class Portfolio extends React.Component {
  render() {
    const { items } = this.props;
    const contentContainer = (
      <>
        <Photos
          items={items}
          settings={{
            widthItemGridContainer: "400px",
            gridItemColumn: "3",
          }}
        />
        <Typography
          items={items}
          settings={{ positionText: "left", sizeTitle: "s" }}
        />
        <IconsList
          items={items.icons}
          settings={{
            paddingLeftRight: "none",
            formIcons: "rectangle",
            fontSizeIcon: "xs",
            widthItemGridContainer: "100px",
          }}
        />
        {/* {items.icons.map((icon) => {
          return (
            <Button buttonIcon={icon} settings={{ widthButton: "blog" }} />
          );
        })} */}
      </>
    );
    return <MainContainer contentContainer={contentContainer} />;
  }
}
export default Portfolio;
