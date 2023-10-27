import { Link, useLocation } from "@remix-run/react";
import image from '../../public/img/carrito.png'

function Navbar() {
    const location = useLocation();
    
  return (
    <nav className="navBar">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Homepage{" "}
          </Link>
          <Link
            to="/us"
            className={location.pathname === "/us" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Us{" "}
          </Link>
          <Link
            to="/guitars"
            className={location.pathname === "/guitars" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Store{" "}
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Blog{" "}
          </Link>
          <Link
            to="/cart"
          >
            <img src={image} alt="buy cart" />
          </Link>
        </nav>
    )
}

export default Navbar