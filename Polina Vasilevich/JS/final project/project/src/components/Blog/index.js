import Title from "../Title";
import { GridContainer, Wrapper } from "../../styles";
import { GridItem } from "./styles";

import "./styles.css";

function Blog(props) {
  const { items } = props;
  return (
    <section>
      <Wrapper>
        <Title items={items} position="center" />
        <GridContainer numberColumns="2" numberRows="2" gridGap="35px">
          {items.list.map((item) => {
            return (
              <GridItem
                key={item.title}
                height="570px"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="imgTextContainer">
                  <h3 className="imgTitle">{item.title}</h3>
                  <span className="imgDate">{item.date}</span>
                </div>
              </GridItem>
            );
          })}
        </GridContainer>
      </Wrapper>
    </section>
  );
}

export default Blog;
