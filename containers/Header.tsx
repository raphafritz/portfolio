import styles from "@/styles/header.module.scss";

import Image from "next/image";

import Logo from "@/public/logo.png";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.logo}>
          <Image src={Logo} alt="" width={50} height={50} />
        </div>
        <nav>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Blog</li>
          </ul>
        </nav>

        <Menu />
      </header>
    </div>
  );
}
