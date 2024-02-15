"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/menu.module.scss";

import classNames from "classnames/bind";
const css = classNames.bind(styles);

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (open) body.style.overflowY = "hidden";
    else body.style.overflowY = "auto";
  }, [open]);

  const goToSection = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <div
          className={css({ hamburger: true, open: open })}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className={css({ menu: true, open: open })}>
        <div className={styles.fade} onClick={() => setOpen(false)} />
        <div className={styles.drawer}>
          <div className={styles.pages}>
            <ul>
              <li onClick={() => goToSection("aboutMe")}>
                <span>Sobre mim</span>
                <span>Sobre mim</span>
              </li>
              <li onClick={() => goToSection("skills")}>
                <span>Habilidades</span>
                <span>Habilidades</span>
              </li>
              <li onClick={() => goToSection("experience")}>
                <span>Experiência</span>
                <span>Experiência</span>
              </li>
              <li onClick={() => goToSection("projects")}>
                <span>Projetos</span>
                <span>Projetos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
