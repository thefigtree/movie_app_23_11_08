import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path={routes.home} element={<Home></Home>}></Route>
        <Route path={routes.detail} element={<Detail></Detail>}></Route>
        <Route path={routes.search} element={<Search></Search>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
};

export default Router;
