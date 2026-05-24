import { Route,Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


export default function App() {

  return(
    <>
        {/*<Route path="/" elemnet={<Layout/>}>*/}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/story" element={<Story/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Route>
        {/*</Route>*/}
        </Routes>
    </>
  );


}