import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Story from "./pages/Story"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <Routes>
      <Route path = "/" element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "login" element ={<Login/>}/>
        <Route path = "menu" element = {<Menu/>}/>
        <Route path = "story" element = {<Story/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;