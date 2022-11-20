import React from "react";
import { useRecoilValue } from "recoil";
import { Galaxy } from "../../recoil/atoms";
import {
  HTMLWrapper,
  TitleWrapper,
  TitleDes,
  ListAniWrapper,
} from "./GalaxyList.style";
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
      <HTMLWrapper>
        <TitleWrapper>반갑습니다</TitleWrapper>
        <TitleDes className="des">
          은하를 선택하여 개발을 시작하여보세요
        </TitleDes>
      </HTMLWrapper>
    );
  } else if (galaxy === 1) {
    return (
      <HTMLWrapper>
        <TitleWrapper>FrontEnd</TitleWrapper>
        <ListAniWrapper>
          {frontList
            ? frontList.map((gal, idx) => {
                const plink = "/planet/" + gal.uid;
                return (
                  <div className="plist" key={idx}>
                    <a href={plink}>{gal.pname}</a>
                  </div>
                );
              })
            : null}
        </ListAniWrapper>
      </HTMLWrapper>
    );
  } else if (galaxy === 2) {
    return (
      <HTMLWrapper>
        <TitleWrapper>BackEnd</TitleWrapper>
        <ListAniWrapper>
          {backList
            ? backList.map((gal, idx) => {
                const plink = "/planet/" + gal.uid;
                return (
                  <div className="plist" key={idx}>
                    <a href={plink}>{gal.pname}</a>
                  </div>
                );
              })
            : null}
        </ListAniWrapper>
      </HTMLWrapper>
    );
  } else if (galaxy === 3) {
    return (
      <HTMLWrapper>
        <TitleWrapper>DevOps</TitleWrapper>
        <ListAniWrapper>
          {devOpsList
            ? devOpsList.map((gal, idx) => {
                const plink = "/planet/" + gal.uid;
                return (
                  <div className="plist" key={idx}>
                    <a href={plink}>{gal.pname}</a>
                  </div>
                );
              })
            : null}
        </ListAniWrapper>
      </HTMLWrapper>
    );
  } else {
    return <div>값을 찾을 수 없습니다.</div>;
  }
};

export default GalaxyList;
