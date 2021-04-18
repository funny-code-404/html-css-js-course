import React from "react";
import PropTypes from "prop-types";
import { Pagination, Button, ButtonContainer, NumberPage } from "./styles";

class PaginationComponent extends React.Component {
  render() {
    const {
      items,
      amountOfPages,
      handleClickButtonNext,
      handleClickButtonPrevious,
      handleClickNumberPage,
      currentPage,
    } = this.props;

    const classNameButtonPrevious = !currentPage ? "inVisibleButton" : "";
    const classNameButtonNext =
      currentPage + 1 >= amountOfPages ? "inVisibleButton" : "";

    return (
      <Pagination>
        <Button
          className={classNameButtonPrevious}
          onClick={handleClickButtonPrevious}
        >
          Previous
        </Button>
        <ButtonContainer onClick={handleClickNumberPage}>
          {items.slice(0, amountOfPages).map((item, index) => {
            const classNameNumberPage =
              currentPage === index ? "activePage" : "";
            return (
              <NumberPage
                key={`pagination${index}`}
                id={`pagination${index}`}
                value={index}
                className={classNameNumberPage}
              >
                {index + 1}
              </NumberPage>
            );
          })}
        </ButtonContainer>
        <Button className={classNameButtonNext} onClick={handleClickButtonNext}>
          Next
        </Button>
      </Pagination>
    );
  }
}

PaginationComponent.propTypes = {
  items: PropTypes.array,
  currentPage: PropTypes.number,
  limit: PropTypes.number,
  amountOfPages: PropTypes.number,
  handleClickButtonNext: PropTypes.func,
  handleClickButtonPrevious: PropTypes.func,
  handleClickNumberPage: PropTypes.func,
};

PaginationComponent.defaultProps = {
  items: [],
  currentPage: 0,
  limit: 5,
  amountOfPages: 1,
};

export default PaginationComponent;
