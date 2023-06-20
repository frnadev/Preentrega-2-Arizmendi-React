import { Link } from "react-router-dom";
import { Cartwidget } from "./Cartwidget";

export const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Placeholder</Link>
      </h2>
      <div>
        <button>Camperas</button>
        <button>Remeras</button>
        <button>Pantalones</button>
        <button>Buzos</button>
      </div>
      <Cartwidget />
    </nav>
  );
};
