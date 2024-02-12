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
              <li
                onClick={() => goToSection("aboutMe")}
                // className={styles.active}
              >
                <span>Sobre mim</span>
                <span>Sobre mim</span>
              </li>
              <li onClick={() => goToSection("projects")}>
                <span>Projetos</span>
                <span>Projetos</span>
              </li>
              <li onClick={() => goToSection("blog")}>
                <span>Blog</span>
                <span>Blog</span>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <div className={styles.links}>
              <a href="#" className={styles.link}>
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.link}>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className={styles.email}>
              <a href="mailto:raphaelsella94@gmail.com">
                raphaelsella94@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
