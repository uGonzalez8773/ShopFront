import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navbar from "./navbar";


function Header() {


  return (
    <header className="header">
      <div className="conteiner split">
        <Link to="/">
          <img className="logo" alt="logo" src={logo} />
        </Link>
        <Navbar />        
      </div>
    </header>
  );
}

export default Header;
