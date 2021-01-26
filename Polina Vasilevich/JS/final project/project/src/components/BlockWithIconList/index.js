import React from "react";
import Icon from "./Icon";
import "./styles.css";

class IconsList extends React.Component {
  render() {
    const { items, classIcon, classContainer, section } = this.props;
    return (
      <section className={section}>
        <div className="flexContainer">
          {items.map((item) => {
            return (
              <Icon
                key={item.title}
                items={item}
                classIcon={classIcon}
                classContainer={classContainer}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default IconsList;
