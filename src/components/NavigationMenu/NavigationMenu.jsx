import "./NavigationMenu.css";
import Link from "./Link";

const NavigationMenu = () => {
  return (
    <menu>
      <div>
        <Link link="Home" />
        <Link link="Link" />
        <Link link="Link" />
      </div>
      <div>
        <Link link="Profil" />
      </div>
    </menu>
  );
};

export default NavigationMenu;
