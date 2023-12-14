import "./NavigationMenu.css";
import Link from "./Link";

const NavigationMenu = () => {
  return (
    <menu>
      <div className="container">
        <div>
          <Link link="Home" />
          <Link link="Link" />
          <Link link="Link" />
        </div>
        <div>
          <Link link="Profil" />
        </div>
      </div>
    </menu>
  );
};

export default NavigationMenu;
