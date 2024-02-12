"use client";

import styles from "@/styles/page.module.scss";

import Menu from "@/components/Menu";

import { Wave } from "@/components/Icons";

import Projects from "@/containers/Projects";
import Posts from "@/containers/Posts";
import AboutMe from "@/containers/AboutMe";
import Header from "@/containers/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.aboutMeSection} id="aboutMe">
          <AboutMe />
        </section>

        <div className="d-flex justify-center">
          <Wave />
        </div>

        <section className={styles.projectsSection} id="projects">
          <h3 className={styles.titleSection} content="Últimos">
            Projetos
          </h3>
          <p className={styles.subtitleSection}>
            Projetos finalizados e alguns que estou trabalhando no momento
          </p>

          <Projects />
        </section>

        <div className="d-flex justify-center">
          <Wave />
        </div>

        <section className={styles.blogSection} id="blog">
          <h3 className={styles.titleSection} content="Posts do">
            Blog
          </h3>
          <p className={styles.subtitleSection}>
            Aqui compartilho algumas das minhas experiências e conhecimentos
          </p>
        </section>

        <Posts />
      </main>

      <Menu />
    </>
  );
}
