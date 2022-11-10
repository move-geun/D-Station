import React from "react";
import { useState, useEffect, useRef, Componenet } from "react";
import QuestionCard from "./QuestionCard";
import { Container, Carousel, Item, Ui } from "./Question.style";
import http from "../../api/http";

const defaultValue = {};
const Question = () => {
  const [item, setItem] = useState();
  const [isData, setIsData] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    http.connect_axios.get(`/ask/`).then((res) => {
      console.log("받아왔서열");
      console.log(res);
      setItem(res.data.list);
    });
  }, []);

  useEffect(() => {
    setIsData(true);
  }, [item, isData]);

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
          {isData== true ? (
            item.map((item) => {
              return (
                <QuestionCard
                  // Tag={item.tag}
                  Title={item.title}
                  theDate={item.theDate}
                  Nickname={item.Nickname}
                />
              );
            })
          ) : (
            <div> 데이터가 없습니다.</div>
          )}
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
