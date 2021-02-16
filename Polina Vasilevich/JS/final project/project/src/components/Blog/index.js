import MainContainer from "../MainContainer";
import Images from "../Photos";

import "./styles.css";

function Blog(props) {
  const { items } = props;
  const contentContainer = (
    <Images
      items={items}
      settings={{
        widthItemGridContainer: "400px",
        heightImg: "350px",
        gridItemRow: "1",
      }}
    />
  );
  return (
    <MainContainer isTitle items={items} contentContainer={contentContainer} />
  );
}

export default Blog;
