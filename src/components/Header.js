import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Menu = styled.ul`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 60px;
  }
`;

export const Header = () => {
  const headerRef = useRef();
  // useRef => 리액트 스크롤이벤트를 위한 Hook
  const scrollHandler = () => {
    const pageY = window.scrollY;
    // scrollY = sct
    if (pageY > 150) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      headerRef.current.style.backdropFilter = "blur(3px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>JINetflix</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          {/* <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> */}
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
