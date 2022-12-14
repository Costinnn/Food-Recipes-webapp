import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hook/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
