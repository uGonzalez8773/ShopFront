import Navbar from "./navbar";

function Footer() {
  return (
    <footer className="footer">
      <div className="conteiner content">
        <Navbar />

        <p className="copyright">
          All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
    