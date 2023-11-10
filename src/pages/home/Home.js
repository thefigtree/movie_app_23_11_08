import { useEffect } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(155, 238, 255, 0.8) 55%,
    rgba(0, 212, 255, 1) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  useEffect(() => {
    (async () => {
      try {
        const data = await nowPlaying();
        console.log(data);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);

  return (
    <div>
      <MainBanner>
        <BlackBg></BlackBg>
        <h3>염죠니의 치킨가게</h3>
        <p>
          염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니
        </p>
      </MainBanner>
    </div>
  );
};
