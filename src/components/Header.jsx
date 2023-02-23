import Navbar from "./Navbar";
import atom from "../images/logo512.png";

const Header = () => {

  return (
    <div className="header">
      <header>
        <div className="header-text">
          <h1>Say hello to ReactJS</h1>
          <div id="atom">
            <img id="atomo" className="App-logo" src={atom} alt="logo-React" />
          </div>
          <p>
            You will learn how to use <br></br>the most popular frontend
            library, <br></br>and become a super Ninja developer
          </p>
        </div>
      </header>
    </div>
  );
};
export default Header;
