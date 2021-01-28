import React from "react";
import Icon from "./Icon";

import './styles.css';

class IconsList extends React.Component {
  render() {
    const { items, styleImg, styleImgContainer, styleGridContainer } = this.props;
    return (
      <section>
        <div className={`paddingRightLeft grid ${styleGridContainer}`}>
          {items.map((item) => {
            return (
              <Icon
                key={item.title}
                items={item}
                styleImg={styleImg}
                styleImgContainer={styleImgContainer}
                styleGridContainer={styleGridContainer}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default IconsList;
