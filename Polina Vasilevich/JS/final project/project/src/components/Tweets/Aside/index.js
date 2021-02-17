import Article from "./Article";
import Categories from "./Categories";
import IconsList from "../../IconsList";
import Button from "../../Button";
import Form from "../../Form";
import Photos from "../../Photos";

export default function Aside(props) {
  const { settings } = props;
  const { posts, tags, photos, form, categories, archive } = props.items;

  return (
    <aside>
      <Article
        items={posts}
        contentContainer={
          <IconsList
            items={posts.items}
            settings={{
              heightImg: "81px",
              widthImg: "111px",
              positionIcons: "left",
              positionText: "left",
              heightMainContainer: "tweets",
              paddingTop: "0",
              paddingBottom: "0",
              paddingLeftRight: "none",
            }}
          />
        }
      />

      <Article
        items={tags}
        contentContainer={
          <div>
            {tags.items.map((tag) => {
              return (
                <Button
                  buttonLabel={tag}
                  settings={{
                    widthButton: "auto",
                    colorButton: "grey",
                    colorTextButton: "grey",
                  }}
                />
              );
            })}
          </div>
        }
      />

      <Form
        items={form}
        settings={{
          stylesText: "tweets",
          paddingLeftRight: "none",
          paddingTop: "0",
          paddingBottom: "40px",
          positionText: "left",
          alignItems: "left",
          sizeInput: "tweets",
          widthButton: "tweets",
          heightMainContainer: "tweets",
        }}
      />

      <Article
        items={photos}
        contentContainer={
          <Photos
            items={photos}
            settings={{
              heightImg: "70px",
              widthItemGridContainer: "70px",
            }}
          />
        }
      />

      <Article
        items={categories}
        contentContainer={<Categories items={categories.items} />}
      />

      <Article
        items={archive}
        contentContainer={<Categories items={archive.items} />}
      />
    </aside>
  );
}
