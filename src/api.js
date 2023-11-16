const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
// const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
// const popularUrl = baseUrl + "movie/popular" + "?language=ko-KR";
// const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-KR";
// const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-KR";

const url = (urlName) => {
  return baseUrl + `${urlName}` + "?language=ko-KR";
};
// 위에 여러개 있는 url변수를 매개변수화 시켜서 줄인 작업

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGJhZGU5NDE2ZjkyOWJjYmVjMTY4MjQzNjRhZTE2MCIsInN1YiI6IjY1NGIzYTU1NDFhNTYxMzM2YTI0NWQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bkbZUDxeyb-b56uG3dDnwBE4VHaarPunvjq3Cz-HfU",
  },
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
