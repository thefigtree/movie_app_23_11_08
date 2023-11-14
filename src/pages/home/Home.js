import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";
import { IMG_URL } from "../../constants";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    position: relative;
  }
  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    max-width: 650px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0) 95%
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

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setIsLoading(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);
  // useEffect
  // => 페이지가 렌더링, 업데이트 될 때 마다 관리 해주는 훅

  // console.log(isloading);
  // console.log(nowPlayingData);

  return (
    <>
      {isloading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner $bgUrl={nowPlayingData[0].backdrop_path}>
              <BlackBg></BlackBg>
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview.slice(0, 100) + "..."}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};

// 렌더링 중 외부에서 정보 (api)를 얻어와야 됨
// 요청하는 작업 => Request
// Api에서 응답하는 작업 => Respose
// 요청 및 응답을 할 때 시간이 걸림
// 시간이 걸릴때 해야하는 작업을 비동기작업
// 비동기작업할 때 async, await를 사용함
// * 문제 발생이 생길 수도 있으므로, 예외 발생 처리를 위해 try ~ catch를 사용
