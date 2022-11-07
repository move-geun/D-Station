import React from "react";
import { useState, useEffect, useRef } from "react";
import Pagination from "react-js-pagination";
import QuestionCard from "./QuestionCard";
import {
  Container,
  Paginations,
  Carousel,
  Item,
  Item3,
  Ui,
} from "./Question.style";

const Question = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const [item, setItem] = useState(items);
  const carousel = useRef(null);

  const handleLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth * 0.7;
  };

  const handleRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth * 0.7;
  };
  return (
    <div>
      <Container>
        <Carousel ref={carousel}>
          {item.map((it) => {
            const { icon, copy, name, like, seen } = it;
            return (
              <Item>
                <QuestionCard />
              </Item>
            );
          })}
        </Carousel>
      </Container>
      <Ui>
        <button onClick={handleLeft}>{"<<"}</button>
        <button onClick={handleRight}>{">>"}</button>
      </Ui>
      {/* <Paginations>
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={500}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handlePageChange}
        />
      </Paginations> */}
    </div>
  );
};

export default Question;
