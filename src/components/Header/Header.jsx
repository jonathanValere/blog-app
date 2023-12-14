import "./Header.css";
import Title from "./Title";
import Baseline from "./Baseline";

const Header = () => {
  return (
    <header>
      <div className="container">
        <i className="fa-solid fa-bars"></i>
        <Title title="Blog - Jonathan VALERE" />
        <Baseline baseline="An awesome baseline" />
      </div>
    </header>
  );
};

export default Header;
