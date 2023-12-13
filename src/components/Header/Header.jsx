import "./Header.css";
import Title from "./Title";
import Baseline from "./Baseline";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Title title="Blog - Jonathan" />
        <Baseline baseline="An awesome baseline" />
      </div>
    </header>
  );
};

export default Header;
