import { useEffect, useState } from "react";
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

  const [nowPlayingData, setNowPlayingData] = useState();
  // 지역변수인 변수를 전역변수로 바꾸는 방법은 useState() 사용

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);
  // useEffect
  // => 페이지가 렌더링, 업데이트 될 때 마다 관리 해주는 훅

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner>
              <BlackBg></BlackBg>
              <h3>{nowPlayingData[0].title}</h3>
              <p>
                염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니염죠니
              </p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
