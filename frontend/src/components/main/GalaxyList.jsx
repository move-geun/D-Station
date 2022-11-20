import React from "react";
import { useRecoilValue } from "recoil";
import { Galaxy } from "../../recoil/atoms";
import {
  FrontSelector,
  BackSelector,
  DevOpsSelector,
} from "../../recoil/selector";

const GalaxyList = () => {
  const frontList = useRecoilValue(FrontSelector).data.list;
  const backList = useRecoilValue(BackSelector).data.list;
  const devOpsList = useRecoilValue(DevOpsSelector).data.list;
  const galaxy = useRecoilValue(Galaxy);

  if (galaxy === 5) {
    return (
      <div>
        <h1>반갑습니다</h1>
        <h3>은하를 선택하여 개발을 시작하여보세요</h3>
      </div>
    );
  } else if (galaxy === 1) {
    return (
      <div>
        <h1>FrontEnd</h1>
        {frontList
          ? frontList.map((gal, idx) => {
              const plink = "/planet/" + gal.uid;
              return (
                <div key={idx}>
                  <a href={plink}>{gal.pname}</a>
                </div>
              );
            })
          : null}
      </div>
    );
  } else if (galaxy === 2) {
    return (
      <div>
        <h1>BackEnd</h1>
        {backList
          ? backList.map((gal, idx) => {
              const plink = "/planet/" + gal.uid;
              return (
                <div key={idx}>
                  <a href={plink}>{gal.pname}</a>
                </div>
              );
            })
          : null}
      </div>
    );
  } else if (galaxy === 3) {
    return (
      <div>
        <h1>DevOps</h1>
        {devOpsList
          ? devOpsList.map((gal, idx) => {
              const plink = "/planet/" + gal.uid;
              return (
                <div key={idx}>
                  <a href={plink}>{gal.pname}</a>
                </div>
              );
            })
          : null}
      </div>
    );
  } else {
    return <div>값을 찾을 수 없습니다.</div>;
  }
};

export default GalaxyList;
