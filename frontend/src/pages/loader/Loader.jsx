import { Html, useProgress } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import Loading from "../../components/loader/Loding";

const Loader = () => {
  // const { progress } = useProgress();
  // return <Html center>{progress} % loaded</Html>;
  const [loading, setLoading] = useState(true);

  // API호출 되는 동안 로딩 화면 출력
  const checkApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(`api url`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const result = await response.json();
      console.log("mainData", result);
      setLoading(false);
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    checkApi();
  }, []);

  return <>{loading ? <Loading /> : null}</>;
};

export default Loader;
