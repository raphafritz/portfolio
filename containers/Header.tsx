"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/header.module.scss";

import Image from "next/image";

import Logo from "@/public/logo.png";
import Menu from "./Menu";

import classNames from "classnames/bind";
const css = classNames.bind(styles);

export default function Header() {
  const goToSection = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
      </div>
      <nav>
        <ul>
          <li onClick={() => goToSection("aboutMe")}>Sobre mim</li>
          <li onClick={() => goToSection("skills")}>Habilidades</li>
          <li onClick={() => goToSection("experience")}>Experiência</li>
          <li onClick={() => goToSection("projects")}>Projetos</li>
        </ul>
      </nav>

      <Menu />
    </header>
  );
}
