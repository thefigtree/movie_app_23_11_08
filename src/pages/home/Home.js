import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { Banner } from "./Banner";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";
import { ShowMovie } from "./ShowMovie";
import { SyncLoader } from "react-spinners";

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
      {!isloading ? (
        <SyncLoader color="crimson"></SyncLoader>
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]}></Banner>
              <ShowMovie movieData={nowPlayingData}></ShowMovie>
            </>
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
