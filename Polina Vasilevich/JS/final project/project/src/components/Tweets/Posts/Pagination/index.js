import React from "react";
import PropTypes from "prop-types";
import { Pagination, Button, ButtonContainer, NumberPage } from "./styles";

class PaginationComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: props.items,
  //     currentPage: props.currentPage,
  //     limit: props.currentPage,
  //     amountOfPages: props.amountOfPages,
  //   };
  // }

  // nextPage = (e) => {
  //   e.preventDefault();
  //   const { currentPage, amountOfPages } = this.state;
  //   if (currentPage + 1 < amountOfPages) {
  //     this.setState((prevState) => ({
  //       currentPage: prevState.currentPage + 1,
  //     }));
  //   }
  // };

  // previousPage = (e) => {
  //   e.preventDefault();
  //   if (this.state.currentPage !== 0) {
  //     this.setState((prevState) => ({
  //       currentPage: prevState.currentPage - 1,
  //     }));
  //   }
  // };

  // setCurrentPage = (e) => {
  //   e.preventDefault();

  //   this.setState((prevState) => ({
  //     ...prevState,
  //     currentPage: +e.target.value,
  //   }));
  // };

  render() {
    // const { items, amountOfPages } = this.state;
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
            const classNameNumberPage = currentPage === index ? "active" : "";
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
