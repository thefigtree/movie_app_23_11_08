// Detail Page 스크롤 이슈 처리

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();
  //   => useLocation(): 현재 페이지의 경로 내용을 객체로 반환하는 Hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      //   behavior: "smooth",
    });
  }, [pathname]);
  //   []안에는 마운트 될 때 마다 바꿔주고 싶은 걸 넣어주면 됨
  return;
};
