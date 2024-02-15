"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/page.module.scss";

import { ArrowUp, GitHub, Wave } from "@/components/Icons";

import Projects from "@/containers/Projects";
import Posts from "@/containers/Posts";
import AboutMe from "@/containers/AboutMe";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

import classNames from "classnames/bind";
const css = classNames.bind(styles);

export default function Home() {
  const [toUpAppear, setToUpAppear] = useState(false);

  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;

      if (!blob) return;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1500, fill: "forwards" }
      );
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > window.innerHeight) setToUpAppear(true);
      else setToUpAppear(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      <Header />

      {/* <div id="blob" /> */}

      <main className={styles.main}>
        <section className={styles.aboutMeSection} id="aboutMe">
          <AboutMe />
        </section>

        <div className="d-flex justify-center">
          <Wave />
        </div>

        <section className={styles.skillsSection} id="skills">
          <h3 className={styles.titleSection}>Habilidades</h3>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL. I help awesome
                people to build ambitious yet accessible web projects - the
                wilder, the better.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL. I help awesome
                people to build ambitious yet accessible web projects - the
                wilder, the better.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
          </div>
        </section>

        <div className="d-flex justify-center">
          <Wave />
        </div>

        <section className={styles.experienceSection} id="experience">
          <h3 className={styles.titleSection}>Experiência</h3>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL. I help awesome
                people to build ambitious yet accessible web projects - the
                wilder, the better.
              </p>
            </div>
            <div className={styles.skill}>
              <p className={styles.title}>Lorem Ipsum</p>
              <p className={styles.description}>
                From interaction design to scaleable design systems, single-page
                apps to something more experimental with WebGL.
              </p>
            </div>
          </div>
        </section>

        <div className="d-flex justify-center">
          <Wave />
        </div>

        <section className={styles.projectsSection} id="projects">
          <h3 className={styles.titleSection}>Projetos</h3>

          <Projects />
        </section>

        {/* <section className={styles.blogSection} id="blog">
          <h3 className={styles.titleSection}>
            Blog
          </h3>
          <p className={styles.subtitleSection}>
            Aqui compartilho algumas das minhas experiências e conhecimentos
          </p>

          <Posts />
        </section> */}

        <div
          className={css({ toUp: true, appear: toUpAppear })}
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowUp />
        </div>
      </main>

      <Footer />
    </>
  );
}
