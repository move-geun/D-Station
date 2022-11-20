import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  useProgress,
  Stars,
  Bounds,
  OrbitControls,
  useBounds,
} from "@react-three/drei";
import {
  MainWrapper,
  CanvasWrapper,
  FootNav,
  RocketMap,
  Newsmap,
} from "./MainPage.style";
import { useNavigate } from "react-router-dom";
import { TestDev } from "../../components/scene/TestDev";
import { TestBack } from "../../components/scene/TestBack";
import { TestFront } from "../../components/scene/TestFront";
import GalaxyList from "../../components/main/GalaxyList";
import SearchMap from "../../components/main/SearchMap";
import MapNav from "../../components/main/MapNav";
import DailyContent from "../../components/main/DailyContent";
import { Openmap, Opennews, CameraZoom } from "../../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoSelector } from "../../recoil/selector";

const MainPage = ({ ...props }) => {
  const [openMap, setOpenmap] = useRecoilState(Openmap);
  const [openNews, setOpennews] = useRecoilState(Opennews);
  const [camerzoom, setCameraZoom] = useRecoilState(CameraZoom);
  const user = useRecoilValue(userInfoSelector);
  const imgsrc = "../assets/" + user.imageUrl;
  const navigate = useNavigate();

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{Math.ceil(progress)} % 로딩중</Html>;
  }

  const openmap = () => {
    setOpenmap(!openMap);
  };

  const closemap = () => {
    setOpenmap(false);
    setOpennews(false);
  };

  const opennews = () => {
    setOpennews(!openNews);
  };

  function SelectToZoom({ children }) {
    const api = useBounds();
    setOpennews(true);
    return (
      <group
        onClick={(e) => (
          e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
        )}
        onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
      >
        {children}
      </group>
    );
  }

  useEffect(() => {
    setOpenmap(false);
    setOpennews(false);
    console.log("뉴스상태", openNews);
  }, []);
  // const check = useRecoilValue(userInfoSelector);

  return (
    <MainWrapper>
      <CanvasWrapper onClick={() => closemap()}>
        <Canvas className="tmp" camera={{ fov: 75, position: [-10, 0, 250] }}>
          <Suspense fallback={<Loader />}>
            <Stars
              radius={300}
              depth={60}
              count={8000}
              factor={5}
              saturation={7}
              fade={false}
            />
            <ambientLight />
            <hemisphereLight
              color="white"
              groundColor="#ff0f00"
              position={[-7, 25, 13]}
              intensity={1}
            />
            <Suspense fallback={null}></Suspense>
            <pointLight position={[500, 200, 0]} intensity={1} />
            <directionalLight position={[500, 200, 0]} intensity={2} />
            <Bounds fit clip observe margin={1.2}>
              <SelectToZoom>
                <TestBack />
                <TestDev />
                <TestFront />
              </SelectToZoom>
            </Bounds>
          </Suspense>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
          />
        </Canvas>
      </CanvasWrapper>
      <FootNav>
        <div className="flexWrapInfo">
          <img className="profile" src={imgsrc} alt="유저 등급사진" />
          <div onClick={() => navigate("/myprofile")}>
            {/* <div> */}
            <div>안녕하세요, {user.userNickname}님</div>
            <div>🕹{user.rankName}</div>
          </div>
          <div className="expBar">
            {user.exp >= 300 ? null : <div className="per">{user.expPer}%</div>}
            <div className="perbox">
              {user.exp >= 300 ? (
                <div className="nowper" style={{ width: "100%" }}></div>
              ) : (
                <div
                  className="nowper"
                  style={{ width: `${user.expPer}%` }}
                ></div>
              )}
            </div>
          </div>
        </div>
        <div className="flexWrap">
          <div onClick={() => openmap()}>
            <MapNav></MapNav>
          </div>
          <div onClick={() => opennews()} className="news">
            <DailyContent></DailyContent>
            {openNews ? (
              <Suspense>
                <Newsmap>
                  <GalaxyList></GalaxyList>
                </Newsmap>
              </Suspense>
            ) : null}
          </div>
        </div>
      </FootNav>
      {openMap ? (
        <RocketMap>
          <SearchMap></SearchMap>
        </RocketMap>
      ) : null}
    </MainWrapper>
  );
};
export default MainPage;
