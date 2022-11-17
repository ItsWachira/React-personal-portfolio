import "./header.css";
import CTA from "./CTA";
import firstimage from "../../assets/firstimage.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>a frontend developer</h1>
        <h5 className="text-light">Here is my portfolio</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={firstimage} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
