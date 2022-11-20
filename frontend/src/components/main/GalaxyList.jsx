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
  //   const backList = useRecoilValue(BackSelector).data.list;
  //   const devOpsList = useRecoilValue(DevOpsSelector).data.list;
  //   const galaxy = useRecoilValue(Galaxy);
  return (
    <div>
      {frontList ? (
        frontList.map((gal, idx) => {
          return (
            <div key={idx}>
              <div>{gal.pname}</div>
            </div>
          );
        })
      ) : (
        <div>값이 없습니다</div>
      )}
    </div>
  );

  //   if (galaxy === 1) {
  //     return (
  //       <div>
  //         {frontList
  //           ? frontList.map((gal, idx) => {
  //               return (
  //                 <div key={idx}>
  //                   <div>{gal.pname}</div>
  //                 </div>
  //               );
  //             })
  //           : null}
  //       </div>
  //     );
  //   } else if (galaxy === 2) {
  //     return (
  //       <div>
  //         {backList
  //           ? backList.map((gal, idx) => {
  //               return (
  //                 <div key={idx}>
  //                   <div>{gal.pname}</div>
  //                 </div>
  //               );
  //             })
  //           : null}
  //       </div>
  //     );
  //   } else if (galaxy === 3) {
  //     return (
  //       <div>
  //         {devOpsList
  //           ? devOpsList.map((gal, idx) => {
  //               return (
  //                 <div key={idx}>
  //                   <div>{gal.pname}</div>
  //                 </div>
  //               );
  //             })
  //           : null}
  //       </div>
  //     );
  //   } else {
  //     return <div>값을 찾을 수 없습니다.</div>;
  //   }
};

export default GalaxyList;
