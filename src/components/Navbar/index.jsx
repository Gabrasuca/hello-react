import IronhackLogo from "../../assets/images/ironhack-logo-xs.png";
import MenuIcon from "../../assets/images/menu-top-xs.png";
import style from "./style.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <img src={IronhackLogo} alt="Ironhack Logo" className={style.icons} />
      <img src={MenuIcon} alt="Menu Icon" className={style.icons} />
    </nav>
  );
}
