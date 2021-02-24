import React from "react";
import PropTypes from "prop-types";

import { ButtonsContainer, Icon } from "./styles";
import Button from "../../../Button";
import { handleContinueRead } from "../../../Button/handlers";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indices: [],
      activeButtonLike: [],
      buttonsShareThis: [],
    };
  }

  handleActiveButton = (e, items) => {
    e.preventDefault();
    if (!items.includes(e.target.id)) {
      items.push(e.target.id);
      this.setState({
        indices: items,
      });
    } else {
      items.splice(items.indexOf(e.target.id), 1);
      this.setState({
        indices: items,
      });
    }
  };

  render() {
    const { index, items, icons } = this.props;
    const condition = this.state.activeButtonLike.includes(`like${index}`);
    const styleButtonLike = condition
      ? { fontWeight: "bold", color: "#000" }
      : {};

    const buttonLikeLabel = !condition ? "Like this" : "Like";

    return (
      <ButtonsContainer>
        {items.href && (
          <Button
            handleButton={(e) => handleContinueRead(e, items.href)}
            buttonLabel="Continue Reading"
            settings={{
              stylesButton: "link",
              colorTextButton: "linkGrey",
            }}
          />
        )}

        <Button
          id={`like${index}`}
          styles={styleButtonLike}
          handleButton={(e) =>
            this.handleActiveButton(e, this.state.activeButtonLike)
          }
          buttonLabel={buttonLikeLabel}
          settings={{
            stylesButton: "link",
            colorTextButton: "linkGrey",
          }}
        />

        <Button
          id={`shareThis${index}`}
          handleButton={(e) =>
            this.handleActiveButton(e, this.state.buttonsShareThis)
          }
          buttonLabel="Share this"
          settings={{
            stylesButton: "link",
            colorTextButton: "linkGrey",
          }}
        />
        {this.state.buttonsShareThis.includes(`shareThis${index}`) &&
          icons.map(({ icon, href }) => (
            <Icon href={href} key={`postIcons${index}`}>
              <i className={icon}></i>
            </Icon>
          ))}
      </ButtonsContainer>
    );
  }
}

Buttons.propTypes = {
  index: PropTypes.number,
  items: PropTypes.array,
  icons: PropTypes.array,
};

Buttons.defaultProps = {
  index: 0,
  items: {
    href: "",
  },

  icons: [
    {
      icon: "",
      href: "",
    },
  ],
};

export default Buttons;
