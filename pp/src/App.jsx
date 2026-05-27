import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="story" element={<Story />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;