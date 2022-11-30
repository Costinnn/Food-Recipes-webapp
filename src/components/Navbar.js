import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
import { useTheme } from "../hook/useTheme";

const Navbar = () => {
  // version 1
  // const {color} = useContext(ThemeContext);

  //version 2 with new hook 'useTheme()'
  const { color} = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
