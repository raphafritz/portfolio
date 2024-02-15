import styles from "@/styles/header.module.scss";

import Image from "next/image";

import Logo from "@/public/logo.png";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
      </div>

      <Menu />
    </header>
  );
}
