const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGJhZGU5NDE2ZjkyOWJjYmVjMTY4MjQzNjRhZTE2MCIsInN1YiI6IjY1NGIzYTU1NDFhNTYxMzM2YTI0NWQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-bkbZUDxeyb-b56uG3dDnwBE4VHaarPunvjq3Cz-HfU",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
