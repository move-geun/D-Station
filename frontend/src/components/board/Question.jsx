import React from "react";
import { useState, useEffect, useRef } from "react";
import QuestionCard from "./QuestionCard";
import {
  Container,
  Carousel,
  Item,
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
          {item.map((it, idx) => {
            const { icon, copy, name, like, seen } = it;
            return (
              <Item key={idx}>
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
    </div>
  );
};

export default Question;
