import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="heading">
      <div className="conteiner split">
        <div className="logo">
            
        </div>
        <nav className="navBar">
          <Link to="/" prefetch="render">
            {" "}
            Homepage{" "}
          </Link>
          <Link to="/us" prefetch="render">
            {" "}
            Us{" "}
          </Link>
          <Link to="/store" prefetch="render">
            {" "}
            Store{" "}
          </Link>
          <Link to="/blog" prefetch="render">
            {" "}
            Blog{" "}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
