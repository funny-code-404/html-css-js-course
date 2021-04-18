import PropTypes from "prop-types";

import { Title } from "../../../Typography/styles";
import { CategoriesContainer, Link, CategoriesItem } from "./styles";

Categories.propTypes = {
  items: PropTypes.array,
};

Categories.defaultProps = {
  items: {
    title: "",
    href: "",
  },
};

export default function Categories({ items }) {
  return (
    <CategoriesContainer>
      {items.map(({ title, href }, index) => {
        return (
          <CategoriesItem key={`categories${index}`}>
            <Link href={href}>
              <Title sizeTitle="asideCategories">{title}</Title>
            </Link>
          </CategoriesItem>
        );
      })}
    </CategoriesContainer>
  );
}
