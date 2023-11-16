import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Banner } from "./Banner";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";
import { ShowMovie } from "./ShowMovie";
import { SyncLoader } from "react-spinners";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";

export const Home = () => {
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [upData, setUpData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  // 지역변수인 변수를 전역변수로 바꾸는 방법은 useState() 사용

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);
        const { results: popResults } = await popular();
        setPopData(popResults);
        const { results: upResults } = await upcoming();
        setUpData(upResults);
        const { results: topResults } = await topRated();
        setTopRatedData(topResults);
        // 비구조화할당은 이름을 :을 붙여서 바꿀 수 있음
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
        <Loading></Loading>
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[1]}></Banner>
              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                ></ShowMovie>
                <ShowMovie
                  titleName={"인기 영화"}
                  movieData={popData}
                ></ShowMovie>
                <ShowMovie
                  titleName={"평점 높은 순위 영화"}
                  movieData={topRatedData}
                ></ShowMovie>
                <ShowMovie
                  titleName={"개봉 예정 영화"}
                  movieData={upData}
                ></ShowMovie>
              </Layout>
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
