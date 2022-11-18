import React from "react";
import { useState, useEffect, useRef } from "react";
import QuestionCard from "./QuestionCard";
import { Container, Carousel, Ui } from "./Question.style";
import http from "../../api/http";

const QuestionSearch = ({ Search }) => {
  const [items, setItems] = useState(null);
  const carousel = useRef(null);

  useEffect(() => {
    http.connect_axios
      .get(`http://k7e106.p.ssafy.io:8081/api/ask/search?keyword=${Search}`)
      .then((res) => {
        setItems(res.data.list);
      })
      .catch((err) => {
        alert("해당하는 검색 결과가 없습니다.");
        window.location.reload();
      });
  }, []);

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
          {items ? (
            items.map((item, idx) => {
              return (
                <QuestionCard
                  key={idx}
                  Tag={item.tag}
                  Title={item.title}
                  theDate={item.theDate}
                  Nickname={item.nickname}
                  Uid={item.uid}
                />
              );
            })
          ) : (
            <div> 검색된 게시글이 없습니다😥.</div>
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

export default QuestionSearch;
