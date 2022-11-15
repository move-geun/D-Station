import React from "react";
import http from "../../api/http";
import {
  SurveyContainer,
  Bubble,
  ResultContainer,
  ResultContent,
} from "./Survey.style";
import { useEffect, useState } from "react";

const Survey = () => {
  const text = [
    "안녕, 지금부터 너의 개발성향을 함께 알아볼게",
    "아무도 없는 집에 들어 가면 어때?",
    "취미 생활을 시작할 때 어떤 편이야?",
    "친구랑 만나기로 했는데 갑자기 약속이 취소되었을 때",
    "사과 하면 뭐가 생각나?",
    "비행기 타기 전에 무슨 생각해?",
    "노래 들을 때 뭐가 중요해?",
    "나 교통사고 났어",
    "나 우울해서 미용실 갔다왔어",
    "차에 뭐 놓고 왔네. 어쩌지?",
    "여행은 어떻게 할까?",
    "뭐하냐~ 심심한데 나와!",
    "요리할 때",
  ];
  const aws1 = [
    "재미로 보는거야",
    "와~ 드디어 나만의 시간이다. 편하고 행복하다",
    "혼자할 수 있는 취미 생활을 즐김",
    "와~ 갑자기 혼자만의 시간이 생겼잖아. 뭐하지? 신나~",
    "백설공주, 애플, 뉴턴, 아침사과 금사과 (관련된 이야기나 생각)",
    "비행기가 추락하면 어쩌지. 비상구 자리에 앉을까? (상상력 풍부)",
    "가사가 너무 중요해~ 가사까지 맘에 들어야 최애곡!",
    "어머! 많이 다쳤어? 괜찮아?(공감과 걱정 먼저 제시)",
    "왜 우울해? 무슨 일 있었어?",
    "같이 가자! 혼자가면 외로워",
    "몇시에 출발해서 어디서 밥 먹고 어디 들려서 이렇게 놀자! (계획철저)",
    "응? 갑자기? 나 오늘 계획 다 세워놨는뎅..",
    "레시피랑 계량대로 잘 만드는게 중요함",
  ];
  const aws2 = [
    "시작하기",
    "너무 외로워. 깜깜하고 너무 조용해",
    "일단 동호회에 가입해서 많은 사람들과 어울림",
    "앗! 이럴수가 그럼.. 누굴 만날까? 전화해봐야지",
    "빨갛다, 과일, 맛있다 (색깔, 맛 등 객관적 사실)",
    "기내식 뭐 나오지? 영화볼까? (현실에 관련된 생각)",
    "노래는 멜로디지~~ 흥얼흥얼 가사가 뭐가 중요해 음악은 Feel이지!",
    "보험은 들어놨어? 누구 과실이야? (해결방안 제시)",
    "펌했어? 염색? 사진 찍어 보내봐",
    "나 혼자 다녀올게! 너 할 거 하고 있어",
    "응? 응 좋아. 그러자. 동의! (J형의 좋은 여행메이트)",
    "오~ 당근 좋지. 어디로 갈까?",
    "음식은 손맛이지. 감으로 하는겨~",
  ];
  const [user, setUser] = useState([]);
  const [idx, setIdx] = useState(0);
  const [content, setContent] = useState({
    qstion: text[idx],
    opt1: aws1[idx],
    opt2: aws2[idx],
  });
  const [result, setResult] = useState(null);

  const first = () => {
    setIdx(idx + 1);
    setUser([...user, "1"]);
  };

  const second = () => {
    setIdx(idx + 1);
    setUser([...user, "2"]);
  };

  const prev = () => {
    setIdx(idx - 1);
    user.splice(-1, 1);
  };

  const next = () => {
    setIdx(idx + 1);
  };

  const send = async () => {
    user.splice(0, 1);
    await http.connect_axios
      .post("MBTI/result/", {
        ans: user,
      })
      .then((res) => {
        setResult(res.data);
        setIdx(idx + 1);
      })
      .catch((e) => {
        alert("에러입니다. 새로고침 됩니다.");
        window.location.reload();
      });
  };

  useEffect(() => {
    setContent({
      qstion: text[idx],
      opt1: aws1[idx],
      opt2: aws2[idx],
    });
  }, [idx]);

  if (idx < 13) {
    return (
      <SurveyContainer>
        <img src="../assets/helper.png" alt="" />
        <Bubble>
          <div className="bubble_container">
            <div className="txt">{content.qstion}</div>
            <button onClick={first}>{content.opt1}</button>
            <button onClick={second}>{content.opt2}</button>
            {idx !== 0 ? (
              <div className="location">
                <div onClick={prev}>이전으로</div>
                <div onClick={next}>다음으로</div>
              </div>
            ) : null}
          </div>
        </Bubble>
      </SurveyContainer>
    );
  } else if (idx == 13) {
    return (
      <SurveyContainer>
        <img src="../assets/helper.png" alt="" />
        <Bubble>
          <div className="bubble_container" onClick={send}>
            제출하기
          </div>
        </Bubble>
      </SurveyContainer>
    );
  } else {
    return (
      <ResultContainer>
        <div className="nav"></div>
        <ResultContent>
          <div className="neonText">{result.type}</div>
          <div className="neonText">{result.title}</div>
          <div className="neonText">{result.description}</div>
          <img src={result.imgsrc} alt="" />
          <div className="neonText">{result.bigSort}</div>
          {result.smallSort
            ? result.smallSort.map((small, idx) => {
                return (
                  <div className="neonText" key={idx}>
                    {small}
                  </div>
                );
              })
            : null}
        </ResultContent>
        <button> 메인페이지로 가기</button>
      </ResultContainer>
    );
  }
};

export default Survey;
