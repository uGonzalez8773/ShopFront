import { Link, useLocation } from "@remix-run/react";

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
            className={location.pathname === "/" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Us{" "}
          </Link>
          <Link
            to="/store"
            className={location.pathname === "/" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Store{" "}
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/" ? "active" : ""}
            prefetch="render"
          >
            {" "}
            Blog{" "}
          </Link>
        </nav>
    )
}

export default Navbar