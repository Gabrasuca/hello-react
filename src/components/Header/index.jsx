import { Navbar } from "../Navbar";
import { TextBox } from "../TextBox";
import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.headerContainer}>
      <Navbar />
      <TextBox />
    </header>
  );
}
