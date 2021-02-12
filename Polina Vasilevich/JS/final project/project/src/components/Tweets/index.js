import React from "react";
import Typography from "../Typography";
import IconsList from "../IconsList";
import { Avatar } from "./styles";
class TweetsComponent extends React.Component {
  render() {
    const settings = this.props;
    return (
      <div className="tweets">
        <div className="info">
          <div>
            <Avatar backgroundImg={settings.backgroundImg}></Avatar>
            <div className="container">
              <Typography items={this.props.items.info} />
            </div>
            <div className="tag"></div>
          </div>
        </div>

        <IconsList />

        <div className="buttons"></div>
      </div>
    );
  }
}

export default TweetsComponent;
