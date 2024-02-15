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

    setVisibleSection(section);
  };

  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    let firstVisibleSection: string | null = null;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionPosition = section.getBoundingClientRect().top - 100; // Subtract 100px
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (sectionPosition <= windowHeight) {
        if (firstVisibleSection === null) {
          firstVisibleSection = section.id;
        }
      }
    }

    if (firstVisibleSection !== null) {
      setVisibleSection(firstVisibleSection);
    } else {
      setVisibleSection(null);
    }
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
      </div>
      <nav>
        <ul>
          <li
            className={css({ active: visibleSection === "aboutMe" })}
            onClick={() => goToSection("aboutMe")}
          >
            Sobre mim
          </li>
          <li
            className={css({ active: visibleSection === "skills" })}
            onClick={() => goToSection("skills")}
          >
            Habilidades
          </li>
          <li
            className={css({ active: visibleSection === "experience" })}
            onClick={() => goToSection("experience")}
          >
            Experiência
          </li>
          <li
            className={css({ active: visibleSection === "projects" })}
            onClick={() => goToSection("projects")}
          >
            Projetos
          </li>
        </ul>
      </nav>

      <Menu />
    </header>
  );
}
